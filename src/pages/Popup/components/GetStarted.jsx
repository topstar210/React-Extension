import React from 'react';
import ButtonLG from './ButtonLG';
import Header from './Header';
import { Link } from 'react-router-dom'


const GetStarted = () => {
    return (
        <div className='flex flex-col h-full' >
            <Header
                text={'Log out'}
                link='Login'
                styles={' bg-[#000000] text-white '}
            />

            <div className="w-full flex flex-col justify-between h-screen px-[32px]">
                <div>
                    <div className="my-[32px]">
                        <h1 className="uppercase font-medium text-[20px] mb-4"> Get Started </h1>
                        <span className="text-[#999999] font-medium text-[16px]">
                            Connect to ScopeBuilder account and use for free!
                        </span>
                    </div>
                    <div>
                        <ButtonLG
                            styles={'bg-gradient-blue'}
                            text={'Connect ScopeBuilder'}
                            fill={'#1890ff'}
                            link="/ScopeBuilder"
                        />
                    </div>
                    <div className="my-[32px]">
                        <h1 className="uppercase font-medium text-[20px] mb-4"> or subscribe now </h1>
                        <span className="text-[#999999] text-[16px]">
                            Subscribe for $2.99 only a month!
                        </span>
                    </div>
                    <Link to={'/KeywordsConnect'} className=" py-4 text-[16px] font-medium flex-1 block text-center  uppercase bg-[#282828] rounded-[4px] w-full ">
                        Subscribe Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
