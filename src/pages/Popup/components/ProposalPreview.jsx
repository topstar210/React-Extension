import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';




const ProposalPreview = () => {

    const navigate = useNavigate()
    


    return (
        <div className='flex flex-col h-full'>
            <Header link='Login' text={'log out'} showButton={true} styles={' bg-black '} />
            <div className="w-full flex-1 h-100%  px-[32px] my-[32px]">
                <div className='h-full flex flex-col  gap-[32px] ' >
                    <div className='flex justify-between items-center'>
                        <h1 className='text-[20px] font-medium uppercase ' >Proposal Preview</h1>
                        <div className='' >
                            <button className=' text-[20px] font-medium uppercase text-[#66DC78] mx-[16px]  '>Copy</button>
                            <button className=' text-[20px] font-medium uppercase text-[#66DC78]  '>Edit Proposal</button>
                        </div>
                    </div>
                    <div className=' flex-grow relative bg-[#282828] border border-[#999999] rounded-[4px]'>
                        <textarea disabled placeholder='Enter proposal here…' className='w-full h-[150px] outline-none leading-[32px] text-[16px] p-[16px] resize-none text-white  placeholder-[#999999] bg-transparent' name="" id="" cols="30" rows="10">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua.

                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                        </textarea>
                        <span className='text-[#999999] block text-right mx-[16px] invisible ' > 0<span>/500</span> </span>

                        <div className=' m-[16px] p-[16px] bg-[#282828]  border border-[#999999] rounded-[4px]' >
                            <span className=' font-medium text-[16px] text-[#999999] block uppercase'> Referral Link </span>
                            <a className='  text-[16px] rounded-[4px]  text-[#66DC78] block  ' >https://www.scopebuilder.com/referral=true </a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => navigate(-1)} className=" py-4 text-[16px] font-medium flex-1 text-  uppercase bg-[#282828] rounded-[4px] ">
                            go back
                        </button>
                        <button onClick={() => navigate(-1)} className=" py-4  text-[16px] font-medium  flex-1 uppercase bg-[#66DC78] rounded-[4px] ">
                            delete proposal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProposalPreview