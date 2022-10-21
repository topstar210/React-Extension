import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ButtonLG from './ButtonLG';
import Header from './Header';
import localStorageService from '../api/localStorageService';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addKeyword, setKeywords, removeKeyword, fetchJobs } from '../../../store/reducers/keywords';

const Keywords = ({ text = 'Connect ScopeBuilder', styles = 'bg-gradient-blue', fill = '#1890ff', link = '/' }) => {

  // const [keywords, setKeywords] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [RSS, setRSS] = useState('');
  const [RssError, setRssError] = useState(false)
  const [keywordError, setKeywordError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null);
  const keywords = useSelector(state => state.keywords.keywords)
  const jobs = useSelector(state => state.keywords.jobs)
  const seenKey = '__seen';
  const dispatch = useDispatch();

  function removeItem(selected) {
    dispatch(removeKeyword(selected))
  }

  function addItem(e) {
    e.preventDefault();
    const doesStartWithUpwork = () => RSS.startsWith('https://www.upwork.com');
    const isURLRss = RSS.startsWith('https://www.upwork.com/ab/feed/topics/rss?securityToken=') ? true : false;


    const fetchData = async () => {
      await dispatch(fetchJobs())
  }


    if (!keyword || !RSS || !doesStartWithUpwork() || !isURLRss) {
      if (!keyword && !RSS) {
        setKeywordError(true)
        setRssError(true)
        setErrorMessage('All fields must be filled')
      }

      if (!RSS && keyword && !doesStartWithUpwork()) {
        setRssError(true)
        setKeywordError(false)
        setErrorMessage('RSS field must be filled')
      }
      if (!keyword && RSS) {
        setKeywordError(true);
        setRssError(false)
        setErrorMessage('keyword field must be filled')
      }


      if (!doesStartWithUpwork() && keyword && RSS) {
        setRssError(true)
        setKeywordError(false)
        setErrorMessage('URL must be Upwork RSS.')
      }
      if (doesStartWithUpwork() && keyword && RSS && !isURLRss) {
        setRssError(true)
        setKeywordError(false)
        setErrorMessage('Must be Upwork RSS not Atom')
      }

    } else {
      setErrorMessage(null)
      setKeywordError(false)
      setRssError(false)
      let newKeyword = {
        id: uuid(),
        keyword: keyword,
        location: '/Home',
        rss: RSS
      };
      dispatch(addKeyword(newKeyword))
      fetchData()
      setKeyword('');
      setRSS('');
    }
  }

  function numberOFJobs(keyword) {
    if (keywords && keywords.length !== 0) {
      let filteredOutput;
      const localJobs = localStorageService.getItem('jobs')
      if (jobs && jobs.length !== 0 && jobs.some(job => (job.keyword === keyword))) {
        filteredOutput = jobs.filter((job) => {
          if (job.keyword === keyword) {
            return job[seenKey] === false
          }
        });
        return filteredOutput.length
      } else if( localJobs && localJobs.length !== 0 && localJobs.some(job => (job.keyword === keyword))) {
        filteredOutput = localJobs.filter((job) => {
          if (job.keyword === keyword) {
            return job[seenKey] === false
          }
        });
        return filteredOutput.length
      } else {
        return 30
      }
    }
  };

  useEffect(() => {
    const localStorageKeywords = localStorageService.getItem('keywords')
    dispatch(setKeywords(localStorageKeywords))
  }, [])

  return (
    <div className="app">
      <Header styles={'bg-[#000000] text-white'} showButton={true} link={'Login'} text={'log out'} date={'31 - 08 - 2022'} />

      <div className="bg-[#000000] px-[32px] relative">
        <h1 className="py-[32px] font-medium uppercase text-[20px] ">KEYWORDS</h1>
        {keywords && (keywords.map((item) => (
          <div
            key={item.id}
            className="bg-[#282828] p-[16px] mb-[16px] rounded-[4px]"
          >
            <div className="flex gap-[16px]">
              <button onClick={() => removeItem(item)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.07 5.23C19.46 5.07 17.85 4.95 16.23 4.86V4.85L16.01 3.55C15.86 2.63 15.64 1.25 13.3 1.25H10.68C8.35004 1.25 8.13004 2.57 7.97004 3.54L7.76004 4.82C6.83004 4.88 5.90004 4.94 4.97004 5.03L2.93004 5.23C2.51004 5.27 2.21004 5.64 2.25004 6.05C2.29004 6.46 2.65004 6.76 3.07004 6.72L5.11004 6.52C10.35 6 15.63 6.2 20.93 6.73C20.96 6.73 20.98 6.73 21.01 6.73C21.39 6.73 21.72 6.44 21.76 6.05C21.79 5.64 21.49 5.27 21.07 5.23Z"
                    fill="#999999"
                  />
                  <path
                    d="M19.23 8.14C18.99 7.89 18.66 7.75 18.32 7.75H5.67999C5.33999 7.75 4.99999 7.89 4.76999 8.14C4.53999 8.39 4.40999 8.73 4.42999 9.08L5.04999 19.34C5.15999 20.86 5.29999 22.76 8.78999 22.76H15.21C18.7 22.76 18.84 20.87 18.95 19.34L19.57 9.09C19.59 8.73 19.46 8.39 19.23 8.14ZM13.66 17.75H10.33C9.91999 17.75 9.57999 17.41 9.57999 17C9.57999 16.59 9.91999 16.25 10.33 16.25H13.66C14.07 16.25 14.41 16.59 14.41 17C14.41 17.41 14.07 17.75 13.66 17.75ZM14.5 13.75H9.49999C9.08999 13.75 8.74999 13.41 8.74999 13C8.74999 12.59 9.08999 12.25 9.49999 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
                    fill="#999999"
                  />
                </svg>
              </button>
              <Link state={[item, numberOFJobs(item.keyword)]} to={item.location} className="flex flex-1 justify-between items-center">
                <div>
                  <span className="text-[#999999] block text-[14px] capitalize ">keyword</span>
                  <span className="text-[16px] block">{item.keyword}</span>
                </div>
                {numberOFJobs(item.keyword) > 0 && <div className="bg-[#66DC781A] text-[#66DC78]  rounded-full w-[24px] h-[24px] flex justify-center items-center  ">
                  {numberOFJobs(item.keyword)}
                </div>}
              </Link>
            </div>
          </div>
        )))}
        <form className=" bg-[#282828] p-[16px] mb-[32px] rounded-[4px] ">
          <div className="flex gap-[8px]">
            <input
              onChange={(event) => setKeyword(event.target.value)}
              value={keyword}
              type="text"
              placeholder="keyword"
              name="keyword"
              id="keyword"
              className={`${keywordError ? 'border-red-500  ' : 'border-[#999999]'} outline-none   bg-[#282828] text-[16px]  px-[16px] flex-1 rounded-[4px] border  h-[53px]`}
            />
            <input
              onChange={(event) => setRSS(event.target.value)}
              value={RSS}
              type="text"
              placeholder="UpWork RSS Link"
              name="keyword"
              id="keyword"
              className={`${RssError ? 'border-red-500  ' : 'border-[#999999]'} bg-[#282828] text-[16px] px-[16px] outline-none flex-1 rounded-[4px] border border-[#999999] h-[53px]`}
            />
          </div>
          <span className='text-red-500 pt-[15px] block text-[14px]' >{errorMessage}</span>
          <button
            onClick={addItem}
            className=" w-full font-medium uppercase bg-[#000000] text-[16px] mt-4 p-4 rounded-[4px]"
          >
            Add New KEYWORD
          </button>
        </form>
      </div>

      <div className=" max-w-[600px] mx-auto">
        <div className="bg-[#282828] p-[32px] w-full ">
          <ButtonLG link={link} text={text} styles={styles} fill={fill} />
        </div>
      </div>
    </div>
  );
}

export default Keywords