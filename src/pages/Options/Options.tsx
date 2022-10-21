import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <div className="OptionsContainer ">
    <h1 className='text-center' >{title} Page</h1>
    <h6 className="text-black text-center">you can add options here. Go to <strong className=' text-blue-600  strong ' > src/pages/Options/Options.tsx </strong>  </h6>
  </div>;
};

export default Options;
