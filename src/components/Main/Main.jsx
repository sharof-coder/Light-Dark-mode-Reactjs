import React from 'react'
import BgImg from '../../assets/Block.png'

const Main = ({ isDarkMode }) => {
    return (
        <main className='flex relative mt-6'>
            <div className="img w-full h-[30.125rem] bg-cover relative">
                <img className=' w-full object-cover z-0' src={BgImg} alt="img" />
            </div>

            <div className="content flex absolute" >
                <div className="leftt flex flex-col gap-8 z-10 relative w-[25rem] left-[6.25rem]  top-[13.5rem] h-[10.625rem]" >
                    <h2 className='font-bold text-4xl'>Title</h2>
                    <h4 className='font-bold'>Description</h4>
                    <button className='w-[8.625rem] h-[3.125rem] flex justify-evenly text-1xl font-bold text-white bg-indigo-500 rounded-md items-center  '>Button <span className=''>&#8594;</span></button>
                </div>

                <div className="right z-10  w-[25rem] left-[41rem] text-3xl relative top-[25.75rem] h-[10.625rem]">
                    <span className=''>&#8594;</span>
                </div>
            </div>
        </main>
    )
}

export default Main