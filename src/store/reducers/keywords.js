import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { getJobs, getAllJobs } from '../../pages/Popup/api/api';
import localStorageService from '../../pages/Popup/api/localStorageService';

const maxJobsToStorePerKeyword = 30;
const seenKey = '__seen';

const UnseenJobs = (keywords, newJobs) => {
  const newKeywords = keywords.map((keyword) => {
    const jobsOFSpecificKeywords = newJobs.filter(
      (job) => keyword.keyword === job.keyword
    );
    return {
      ...keyword,
      numberOfUnseenJobs: jobsOFSpecificKeywords.length,
    };
  });
  return newKeywords;
};

const newAddedJobs = ({ oldJobs, incomingJobs }) => {
  if (oldJobs.length !== 0) {
    return incomingJobs.filter(
      (nextJob) =>
        !oldJobs.find(
          (oldJob) =>
            oldJob.uid + oldJob.keyword === nextJob.uid + nextJob.keyword
        )
    );
  }
  return incomingJobs;
};

const mergeJobs = ({ oldJobs, incomingJobs }) => {
  if (oldJobs !== 0) {
    let newJobs = [
      ...incomingJobs.filter(
        (job) =>
          !oldJobs.find(
            (oldJob) => oldJob.uid + oldJob.keyword === job.uid + job.keyword
          )
      ),
      ...oldJobs,
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return newJobs;
  }
  return incomingJobs;
};

const sliceJobs = (jobs) => {
  const keywords = {};
  for (const job of jobs) {
    if (!keywords[job.keyword]) keywords[job.keyword] = [];
    if (keywords[job.keyword].length < maxJobsToStorePerKeyword)
      keywords[job.keyword].push(job);
  }
  return [].concat(...Object.values(keywords));
};

export const fetchJobs = createAsyncThunk('keywords/addKeyword', async () => {
  console.log('calling  fetch Jobs')
  const keywords = localStorageService.getItem('keywords');
  if (keywords && keywords.length !== 0) {
    const result = await getAllJobs(keywords);
    // const prevJobs = unseenJobs(result)
    return result;
  }
  return [];
});

const keywordsSlice = createSlice({
  name: 'keywords',
  initialState: {
    keywords: [],
    jobs: [],
    numberOfUnseenJobs: 0,
    loading: true,
  },
  reducers: {
    setKeywords: (state, action) => {
      if (action.payload) state.keywords = action.payload;
    },
    addKeyword: (state, action) => {
      state.keywords.push(action.payload);
      localStorageService.setItem('keywords', state.keywords);
    },
    removeKeyword: (state, action) => {
      let tempKeywords = [];
      const jobs = localStorageService
        .getItem('jobs')
        .filter((job) => action.payload.keyword !== job.keyword);
      state.keywords.forEach((item) => {
        if (item.id !== action.payload.id) tempKeywords.push(item);
      });
      state.keywords = tempKeywords;
      localStorageService.setItem('keywords', state.keywords);
      localStorageService.setItem('jobs', jobs);
    },
    markAsSeen: (state, action) => {
      const storegedJobs = localStorageService.getItem('jobs')
      const reduxJobs = current(state.jobs)
      const jobs = (reduxJobs && reduxJobs.length !== 0) ? reduxJobs : storegedJobs;

      const output = jobs.map((job) => {
        if (job.keyword === action.payload) {
          return {
            ...job,
            [seenKey]:true
          }
        }
        return job
      })
      localStorageService.setItem('jobs', output);
      state.jobs = output
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.length !== 0) {
          const incomingJobs = action.payload;
          const oldJobs = localStorageService.getItem('jobs')
            ? localStorageService.getItem('jobs')
            : [];
          const newlyAddedJobs = newAddedJobs({ oldJobs, incomingJobs });

          // state.keywords = UnseenJobs(keywords, newlyAddedJobs);
          // localStorageService.setItem('keywords', UnseenJobs(keywords, newlyAddedJobs))

          const merge = mergeJobs({
            oldJobs,
            incomingJobs,
          });
          const slicedJobs = sliceJobs(merge);
          localStorageService.setItem('jobs', slicedJobs);
          state.jobs = slicedJobs;
        }
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        console.log('something wrong happened, please try again later');
      });
  },
});

// Action creators are generated for each case reducer function
export const { addKeyword, setKeywords, removeKeyword, markAsSeen } =
  keywordsSlice.actions;

export default keywordsSlice.reducer;
