"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'

import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeProvider';

const Navbar = () => {// bg-gray-700
    const { data: session, status } = useSession();


    const context = useContext(ThemeContext)



    useEffect(() => {
        if (session?.user?.email) {
            context.settingMessage(session.user.email);
        }
    }, [session]);


    // if (status === "loading") {
    //     return (
    //         <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
    //             <div className="text-xl font-semibold text-blue-600 animate-pulse">
    //                 Loading your Site...
    //             </div>
    //         </div>
    //     );
    // }


    return (
        <>
            <nav className=' flex h-[5vh] font-semibold bg-gray-700  text-white fixed z-20 w-screen top-0 left-0' >
                <div className='  flex justify-center w-[45vw] items-center'>
                    {/* links */}

                    <ul className=' flex items-center justify-evenly w-[45vw] '>
                        <Link href="/" className='cursor-pointer hover:underline '>Home</Link>
                        <Link href="/Catagory" className='cursor-pointer hover:underline '>Category</Link>
                        <Link href="/Products" className='cursor-pointer hover:underline' >Products</Link>
                        <Link href="/Cart" className='cursor-pointer hover:underline'>Cart</Link>
                        <Link href="/productAddPage" className='cursor-pointer hover:underline'>Product Add</Link>
                    </ul>

                </div >

                <div className='text-[10px] italic text-center flex justify-center items-center capitalize'>{context.message}</div>
                <div className='flex items-center  w-[52vw] gap-8 justify-end '>
                    {/* buttons */}
                    {status === "unauthenticated" ? <><Link href="/Login" className=' cursor-pointer rounded-xl px-3 bg-blue-400 text-white hover:ring-1  hover:ring-white hover:bg-blue-900' >LogIn</Link>
                        <Link href="/Signin" className=' cursor-pointer rounded-xl px-3 bg-blue-400 text-white hover:ring-1  hover:ring-white hover:bg-blue-900'>SignIn</Link>
                    </> : <button className='cursor-pointer rounded-xl px-3 bg-blue-400 text-white hover:ring-1  hover:ring-white hover:bg-blue-900' onClick={() => { signOut() }}>Logout</button>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar