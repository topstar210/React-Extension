import React from 'react';
import Header from './Header';

const SignUp = () => {
  return (
    <div className='flex flex-col h-full' >
      <Header link='Login' text={'Log in'} styles={' border-[#66DC78] border border-[1.5px]  text-[#66DC78] '} />

      <div className="w-full flex-1 flex flex-col justify-between px-[32px]">
        <div>
          <h1 className="uppercase font-medium text-[20px] my-[32px]"> sign up </h1>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              className="p-4 text-[16px] rounded-[4px] bg-[#000000] placeholder-[#999999] border border-[#999999]"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="p-4 text-[16px] rounded-[4px] bg-[#000000] placeholder-[#999999] border border-[#999999]"
              placeholder="Password"
            />
            <input
              type="password"
              className="p-4 text-[16px] rounded-[4px] bg-[#000000] placeholder-[#999999] border border-[#999999]"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-[32px]">
          <button className=" py-4 text-[16px] font-medium  flex-1 uppercase bg-[#66DC78] rounded-[4px] ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
