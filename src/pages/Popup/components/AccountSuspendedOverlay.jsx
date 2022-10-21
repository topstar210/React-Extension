import React         from 'react';

const AccountSuspendedOverlay = ({ show, close }) => {
    
    if (!show) {
        return null;
    }

    return (
        <div>
            <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-[32px] z-50">
                        {/*content*/}
                        <div className="rounded-[4px] relative flex flex-col w-full bg-[#282828] outline-none focus:outline-none px-[89px]  py-[32px]  ">
                            <span className='font-medium text-[20px] text-center mb-[4px]  ' >
                                Account Suspended
                            </span>
                            <span className='text-[12px] mb-[32px] text-center ' >
                                Your account has been suspended due to a payment failure. Please <br />
                                proceed to the payment page to continue using.</span>

                            <div className=' mx-auto ' >
                                <button onClick={ close } className=' bg-[#66DC78] rounded-[4px]  px-[32px] py-[16px] font-medium text-[16px]  uppercase'>
                                    unlock account
                                </button>
                            </div>
                        </div>
                </div>
                <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
                </div>
        </div>
    )
}

export default AccountSuspendedOverlay