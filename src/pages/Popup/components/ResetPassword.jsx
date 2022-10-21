import React from 'react';
import Header from './Header';
import { Navigate, useNavigate } from 'react-router-dom';

const ResetPassword = ({ showButton = false }) => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col h-full' >
      <Header showButton={showButton} text={'Sign up'} styles={' border-[#66DC78] border border-[1.5px]  text-[#66DC78] '} />

      <div className="w-full flex flex-col justify-between flex-1 px-[32px]">
        <div>
          <h1 className="uppercase font-medium text-[20px] my-[32px]"> reset password </h1>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              className="p-4 text-[16px] rounded-[4px] bg-[#000000] placeholder-[#999999] border border-[#999999]"
              placeholder="New Password"
            />
            <input
              type="password"
              className="p-4 text-[16px] rounded-[4px] bg-[#000000] placeholder-[#999999] border border-[#999999]"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className="flex gap-4 mb-[32px]">
          <button onClick={() => navigate(-1)} className=" py-4 flex-1 text-[16px] font-medium  uppercase bg-[#282828] rounded-[4px] ">
            go back
          </button>
          <button onClick={() => navigate(-1)} className=" py-4  flex-1 text-[16px] font-medium uppercase bg-[#66DC78] rounded-[4px] ">
            reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
