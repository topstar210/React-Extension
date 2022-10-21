const defaultStore = []


export const JOBS_SET = 'JOBS_SET';
export const JOBS_ADD = 'JOBS_ADD';
export const JOBS_SET_SEEN = 'JOBS_SET_SEEN';
export const JOBS_SET_SUGGESTED = 'JOBS_SET_SUGGESTED';



const jobs = function (state = defaultStore, action) {
  switch (action.type) {
    case JOBS_ADD:
      return {
        test: state,
        another:'another test'
      }
    default:
      return state;
  }
}

export default jobs