import React from 'react';
import {Link} from 'react-router-dom'

const Header = ({text, link, styles, showButton = true, date='' }) => {
  return (
  <div className="bg-[#282828] w-full px-[32px] ">
      <div className="h-[90px] flex justify-between items-center">
        <span className="text-[20px] font-bold">
          <span className="text-[#66DC78] leading-[26px]">Work</span>
          Alert
        </span>
        <div className='flex gap-[24px] items-center '>
         {date && <span className='text-[#999999] uppercase '> Valid Till <span>{date}</span> </span>}
          {showButton && (
            <Link to={`/${link}`} className={`${styles} font-medium uppercase text-[13px] px-[16px] py-[8px] rounded-[4px]`} >
            {text}
           </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
