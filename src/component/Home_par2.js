"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import MyCountdown from './MyCountdown'
import { sales_line } from '@/data'

const Home_par2 = () => {

    const [num, setnum] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {

            setnum((prev) =>  prev === 3 ? 1 : prev + 1 )


        }, 4000);

        return () => clearTimeout(interval)
    },[])

    return (
        <>

            <div className='width-screen h-[50vh]  flex bg-gray-800' >
                <div className='w-1/2 relative  rounded-4xl overflow-hidden h-full'>
                    {/* image */}
                    <Image src="/images/bags.jpg" className='object-cover' alt="saleimage" fill={true} />
                </div>
                <div className='flex flex-col justify-center items-center w-1/2 h-full gap-10' >
                    <MyCountdown />
                    {/* text for sale and countdown */}
                    <p key={num} className='italic text-white  text-center font-semibold' style={{ animation: "movedown 4s ease-in-out infinite " }}> {sales_line[num]} </p>
                    <style jsx global>{`

                    @keyframes movedown {

                    0%{
                    transform:translateY(0px) scale(1)
                    
                    }
                    
                    100%{
                    
                    transform : translateY(25px) scale(1.2)
                    
                    }
                    
                    }
                    
                    `}</style>
                </div>
            </div>

        </>
    )
}

export default Home_par2