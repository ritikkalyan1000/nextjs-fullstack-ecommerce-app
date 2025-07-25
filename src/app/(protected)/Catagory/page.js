
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const CatagoryPage = () => {

    const router = useRouter();

    return (
        <>
            <h1 className='font-semibold text-2xl text-center m-5'>Category</h1>
            <hr></hr>
            <div className='border w-screen h-[calc(100vh-5vh)] flex justify-center items-center bg-gray-900 '>




                <div className='w-1/5 border h-[30vh] flex justify-center items-center relative transition-all duration-500 ease-in-out hover:w-[30vw] hover:h-[35vh] hover:top-6' onClick={()=>{router.push("/Catagory/men-clothing")}}>
                    {/* mens clothing */}
                    <div className='absolute bottom-1 right-0 z-10 p-1 rounded-2xl hover:text-blue-100 text-2xl bg-black text-white'>
                        Men's clothing
                    </div>
                    <div className='w-full h-full relative'>
                        <Image src="/images/men_fashion.jpg" alt='mens_fashion' fill={true} className='object-cover' />
                    </div>

                </div>


                <div className='w-1/5 border h-[30vh] flex justify-center items-center relative transition-all duration-500 ease-in-out hover:w-[30vw] hover:h-[35vh] hover:top-6 ' onClick={()=>{router.push("/Catagory/jewelery")}}>
                    {/* mens clothing */}
                    <div className='absolute bottom-1 right-0 z-10 p-1 rounded-2xl hover:text-blue-100 text-2xl bg-black text-white'>
                        Jewelry
                    </div>
                    <div className='w-full h-full relative'>
                        <Image src="/images/jewelary.jpg" alt='mens_fashion' fill={true} className='object-cover' />
                    </div>

                </div>
                <div className='w-1/5 border h-[30vh] flex justify-center items-center relative transition-all duration-500 ease-in-out hover:w-[30vw] hover:h-[35vh] hover:top-6' onClick={()=>{router.push("/Catagory/electronics")}}>
                    {/* mens clothing */}
                    <div className='absolute bottom-1 right-0 z-10 p-1 rounded-2xl hover:text-blue-100 text-2xl bg-black text-white'>
                        Electronics
                    </div>
                    <div className='w-full h-full relative'>
                        <Image src="/images/electronics.jpg" alt='mens_fashion' fill={true} className='object-cover' />
                    </div>

                </div>
                <div className='w-1/5 border h-[30vh] flex justify-center items-center relative   transition-all duration-500 ease-in-out hover:w-[30vw] hover:h-[35vh] hover:top-6' onClick={()=>{router.push("/Catagory/women-clothing")}}>
                    {/* mens clothing */}
                    <div className='absolute bottom-1 right-0 z-10 p-1 rounded-2xl hover:text-blue-100 text-2xl bg-black text-white'>
                        Women's clothing
                    </div>
                    <div className='w-full h-full relative'>
                        <Image src="/images/wommen.jpg" alt='mens_fashion' fill={true} className='object-cover' />
                    </div>

                </div>

            </div>


        </>
    )
}

export default CatagoryPage