"use client"
import { textual_array } from '@/data';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Home_part1 = () => {// 

    const [num, setnum] = useState(1);

    useEffect(() => {
        const setinterval = setInterval(() => {
            setnum((prev) => prev === 3 ? 1 : prev + 1);



        }, 6000);
        
        return () => clearInterval(setinterval);
    },[])






    return (
        <>

            <div className='  h-[calc(100vh-5vh)] flex z-[2] '>
                <div className='w-[50vw]  h-full flex justify-center items-center text-center text-2xl ' >
                    {/* textual content that changes with the image */}
                    {/* Welcome to your one-stop destination for unbeatable prices and top-rated products. Discover the latest trends and timeless essentials all in one place. */}
                    <p>{textual_array[num]}</p>


                </div>
                <div className='w-[50vw] h-full   relative overflow-hidden '>
                    {/* images to show people */}
                    <Image src={`/images/fashion${num}.jpg`} fill={true} alt='women1' className='object-contain bg-black ' style={{
                        animation: "zoomINOUT 8s ease-in-out infinite"
                    }} />
                    <style jsx global>
                        {`@keyframes zoomINOUT{
                            0%,100%{
                            transform :scale(1);
                            }
                            50%{
                            transform:scale(1.05);
                            }
                            
                            }
                            `}
                    </style>

                </div>
            </div>

        </>
    )
}

export default Home_part1