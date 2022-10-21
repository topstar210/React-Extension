import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col h-full'>
      <Header text={'Sign up'} link={'SignUp'} styles={' border-[#66DC78] border border-[1.5px] text-[#66DC78] '} />

      <div className=' flex-1' >
        <div className="flex h-full flex-col justify-between px-[32px]">
          <div>
            <h1 className="uppercase font-medium text-[20px] my-[32px]"> log in </h1>
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
            </div>
          </div>
          <div className="flex gap-4 mb-[32px]">
            <Link to={'/ForgotPassword'} className=" text-center py-4 flex-1 text-[16px] font-medium  uppercase bg-[#282828] rounded-[4px] ">
              forgot password
            </Link>
            <Link to={'/GetStarted'} className=" py-4 text-center  flex-1 text-[16px] font-medium uppercase bg-[#66DC78] rounded-[4px] ">
              log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
