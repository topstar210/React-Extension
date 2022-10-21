import React, {  useEffect } from 'react'
import moment from 'moment';
import Header from './Header'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Loader from './Loader';
import he from 'he';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, markAsSeen } from '../../../store/reducers/keywords';
import localStorageService from '../api/localStorageService';

const Home = () => {
    const keyword = useLocation();
    const allNewJobs = useSelector(state => state.keywords);
    const dispatch = useDispatch();



    const handleToggleModal = (link) => {
        // setShowModal(!showModal);
        window.open(link)
    }

    const handleHTMLcoding = (text) => {
        return he.decode(text)
    }

    const truncate = (string) => {
        const decodedText =handleHTMLcoding(string);
        return decodedText.length > 190 ? decodedText.substring(0, 190) + ' ...': decodedText
    }

    const filteredJobs = (IncomingJobs) => {
        const localStorageJobs = localStorageService.getItem('jobs') 
        if (IncomingJobs && IncomingJobs.length !== 0) {
            console.log(IncomingJobs);
            console.log('it will go here');
            return IncomingJobs.filter( (job)=> job.keyword === keyword.state[0].keyword )
        }
        if (localStorageJobs && localStorageJobs !== 0) {
            console.log('this is local storage')
            console.log(localStorageJobs)
            return localStorageJobs.filter( (job)=> job.keyword === keyword.state[0].keyword)
        }
        return []
    }


    useEffect(() => {
        //   let config = localStorage.getItem('config')
        //   let configObj = config ? JSON.parse(config) : { 'url': 'https://www.upwork.com/ab/feed/topics/rss?securityToken=a1cffed403e9bca2ec42655707a6fa273aa337e1dc98bc0487df198ec8dc614486fc75097cd45f292335ec9997f3436fc373b3bb688745f09899a3e4985058d1&userUid=1261666235980595200&orgUid=1261666235993178113&topic=most-recent', 'interval': 1 };
        //   fetchData(configObj);
        // fetchData()
        console.log('useEffect of Home is Triggered')
        return () => {
            // if (allNewJobs && allNewJobs.jobs.length !==0) {
            // }
            dispatch(markAsSeen(keyword.state[0].keyword))
        }
    }, [])


    return (
        <div>
            <Loader isLoading={false} >
                <Header link='Login' text={'log out'} showButton={true} styles={' bg-black '} />
                <div className="w-full h-screen ">
                    <div className='border-b border-[#999999] flex items-center justify-between mb-[32px]'>
                        <div className="flex items-center gap-[16px] pl-[32px] pr-[18px] ">
                            <Link to={-1} state={filteredJobs(allNewJobs?.jobs)} className=" rotate-180 w-[57px] h-[57px] bg-[#282828]  flex justify-center items-center rounded-full relative ">
                                {/* arrow */}
                                <svg
                                    className="relative z-10"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0312 19.6042C14.8333 19.6042 14.6354 19.5312 14.4791 19.375C14.177 19.0729 14.177 18.5729 14.4791 18.2708L20.25 12.5L14.4791 6.72917C14.177 6.42708 14.177 5.92708 14.4791 5.625C14.7812 5.32292 15.2812 5.32292 15.5833 5.625L21.9062 11.9479C22.2083 12.25 22.2083 12.75 21.9062 13.0521L15.5833 19.375C15.427 19.5312 15.2291 19.6042 15.0312 19.6042Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M21.1771 13.2812H3.64587C3.21879 13.2812 2.86462 12.9271 2.86462 12.5C2.86462 12.0729 3.21879 11.7188 3.64587 11.7188H21.1771C21.6042 11.7188 21.9584 12.0729 21.9584 12.5C21.9584 12.9271 21.6042 13.2812 21.1771 13.2812Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                            <div className="my-[32px]">
                                <div className="flex flex-col gap-[8px]">
                                    <span className="uppercase font-medium text-[20px] ">{keyword.state[0].keyword}</span>
                                    <span className="uppercase text-[12px] py-[4px] px-[8px] bg-[#66DC7833] rounded-[4px] text-[#66DC78] w-fit ">
                                        {keyword.state[1]}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=' px-[32px]'>
                            <div className='flex gap-[16px] '>
                                <Link to={'/CreateProposal'} className='flex items-center justify-center rounded-full w-[59px] h-[59px] bg-[#142C18] '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g id="edit" transform="translate(-620 -252)">
                                            <path id="Vector" d="M14.19,0H5.81C2.17,0,0,2.17,0,5.81v8.37C0,17.83,2.17,20,5.81,20h8.37c3.64,0,5.81-2.17,5.81-5.81V5.81C20,2.17,17.83,0,14.19,0ZM8.95,15.51a2.578,2.578,0,0,1-1.24.63l-2.46.35a2.452,2.452,0,0,1-.27.02,1.48,1.48,0,0,1-1.06-.41,1.526,1.526,0,0,1-.39-1.34l.35-2.46a2.454,2.454,0,0,1,.63-1.24L8.97,6.6c.08.21.16.42.27.66.1.21.21.43.33.63a5,5,0,0,0,.3.45,3.728,3.728,0,0,0,.32.42,1.363,1.363,0,0,0,.11.14,6.538,6.538,0,0,0,.79.79.917.917,0,0,0,.13.12c.15.12.3.24.43.33a3.738,3.738,0,0,0,.49.32c.2.12.42.23.64.34s.44.19.65.26Zm6.42-6.42-.92.93a.31.31,0,0,1-.22.09.248.248,0,0,1-.09-.01A6.2,6.2,0,0,1,9.91,5.87a.3.3,0,0,1,.08-.3l.93-.93c1.52-1.52,2.97-1.49,4.46,0a3.209,3.209,0,0,1,1.13,2.25A3.243,3.243,0,0,1,15.37,9.09Z" transform="translate(622 254)" fill="#66dc78" />
                                            <path id="Vector-2" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(644 276) rotate(180)" fill="none" opacity="0" />
                                        </g>
                                    </svg>
                                </Link >

                                <Link to={'/ProposalPreview'} className='flex items-center justify-center rounded-full w-[59px] h-[59px] bg-[#142C18] '>
                                    <svg id="copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path id="Vector" d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H4.9C1.4,14,0,12.6,0,9.1V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z" transform="translate(2 8)" fill="#66dc78" />
                                        <path id="Vector-2" data-name="Vector" d="M9.09,0H4.89C1.44,0,.04,1.37,0,4.75H3.09c4.2,0,6.15,1.95,6.15,6.15v3.09c3.38-.04,4.75-1.44,4.75-4.89V4.9C13.99,1.4,12.59,0,9.09,0Z" transform="translate(8.01 2)" fill="#66dc78" />
                                        <path id="Vector-3" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-[600px]' >
                        {filteredJobs(allNewJobs.jobs).map((item, index) => (
                            <div key={index} className={`px-[32px] pb-[16px]`}>
                                <div className={`${item['__seen'] === true ? 'border-[#000]' : 'border-[#66DC78]'} border  rounded-[4px] p-[16px]`} >
                                    <div className='bg-[#282828] rounded-[4px] p-[16px] ' >
                                        <div className='flex text-[16px] font-bold items-center justify-between text-[#999999] ' >
                                            <span>
                                                <span className=' capitalize'>{moment(item.date).fromNow()}</span>
                                                {/* Acceptance feature will be implemented way in the future */}
                                                {/* <span>{item.acceptance} </span>%  Acceptance */}
                                            </span>
                                            {item.budget && (<span className=' capitalize' >
                                                Budget: <span>{item.budget}</span>
                                            </span>)}
                                            {item.hourly && (<span className=' capitalize' >
                                                hourly Rate : <span>{item.hourly}</span>
                                            </span>)}
                                        </div>
                                        <h1 className=' text-[24px] font-medium max-w-[450px] my-[16px] '   >
                                            {handleHTMLcoding(item.title)}
                                        </h1>
                                        <p className=' text-[#999999] text-[16px] leading-[32px] mb-[16px]   '>{truncate(item.description)}</p>
                                        <button onClick={() => handleToggleModal(item.link)} className='font-bold text-[#66DC78] text-[16px]'> Read More </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </Loader>
            {/* <AccountSuspendedOverlay show={showModal} close={handleToggleModal}  /> */}
        </div>
    )
}

export default Home