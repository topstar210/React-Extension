import React from 'react'
import { Link } from 'react-router-dom'


const StatusConnecting = () => {
    return (
        <div className="h-full w-full bg-gradient-blue rounded-[10px] flex items-center justify-center">
            <div>
                <div className="relative mx-auto w-fit">
                    <div className="bg-white rounded-full w-[81px] h-[81px] flex justify-center items-center  z-10 relative ">
                        <svg
                            id="Iconly_Bulk_Work"
                            data-name="Iconly/Bulk/Work"
                            xmlns="http://www.w3.org/2000/svg"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                        >
                            <g id="Work">
                                <path
                                    id="Fill_1"
                                    data-name="Fill 1"
                                    d="M0,0C.083,3.9.314,10.563.347,11.3a7.8,7.8,0,0,0,1.641,4.28,6.065,6.065,0,0,0,5.1,2.274c3.064.017,6.442.017,9.722.017s6.489,0,9.188-.017a6.137,6.137,0,0,0,5.1-2.274A7.567,7.567,0,0,0,32.7,11.3c.033-.618.2-7.854.3-11.3Z"
                                    transform="translate(0 15.132)"
                                    fill='#1890ff'
                                    opacity="0.4"
                                />
                                <path
                                    id="Fill_4"
                                    data-name="Fill 4"
                                    d="M0,1.25V3.407a1.245,1.245,0,0,0,1.238,1.25,1.245,1.245,0,0,0,1.238-1.25V1.25A1.245,1.245,0,0,0,1.238,0,1.245,1.245,0,0,0,0,1.25"
                                    transform="translate(15.262 21.058)"
                                    fill='#1890ff'
                                />
                                <path
                                    id="Fill_6"
                                    data-name="Fill 6"
                                    d="M20.591,21.863a1.239,1.239,0,0,1-1.2-.941,2.982,2.982,0,0,0-2.9-2.256,3.019,3.019,0,0,0-2.937,2.262,1.247,1.247,0,0,1-1.2.92,1.281,1.281,0,0,1-.167-.011A28.159,28.159,0,0,1,.556,17.471,1.249,1.249,0,0,1,0,16.427V10.65A6.331,6.331,0,0,1,6.3,4.3H9.549A4.9,4.9,0,0,1,14.369,0h4.263a4.9,4.9,0,0,1,4.82,4.3h3.264A6.323,6.323,0,0,1,33,10.65v5.777a1.257,1.257,0,0,1-.554,1.044A28.133,28.133,0,0,1,20.76,21.853,1.307,1.307,0,0,1,20.591,21.863ZM14.369,2.5a2.415,2.415,0,0,0-2.316,1.8h8.894a2.414,2.414,0,0,0-2.315-1.8Z"
                                    transform="translate(0)"
                                    fill='#1890ff'
                                />
                            </g>
                        </svg>
                    </div>
                    <div className="bag-circular-vertical"></div>
                </div>
                <div className="my-[32px]">
                    <span className='text-[20px] font-medium block text-center  '>Connecting To ScopeBuilder</span>
                    <span className=' text-[12px] block text-center '>
                        We appreciate your patience. Please wait while Work <br />
                        Alert is waiting for ScopeBuilder verification.
                    </span>
                </div>
                <div className='w-fit mx-auto'>
                    <Link to={'/StatusFailed'} className=" bg-white font-medium uppercase text-[#1890FF] text-[21px] py-[16px] px-[32px] rounded-[4px] ">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StatusConnecting