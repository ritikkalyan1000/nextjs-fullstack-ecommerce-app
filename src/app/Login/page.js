"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';


const Login = () => {

    const router = useRouter();

    const [form, setForm] = useState({email: "", password: "" })
    const [msg, setmsg] = useState("")

    const handleOnchange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })

    }


    const handleSubmit = async (e) => {
        e.preventDefault();



        const form_data = await signIn("credentials",{
            email:form.email,
            password:form.password,
            redirect:false // important this is all in the Signin function and if redirect is not false then i take us on the same Login page again as not refirect is false therefore  next line will run which is ok and then we will redirect
        });

        if(!form_data.ok){
            router.push("/Signin");


        }else{
            router.push("/")
        }

    }



    return (
        <>

            <div className='w-screen h-[95vh]  flex justify-center items-center bg-gradient-to-r to-blue-100 from-purple-200'>
                <div className=' w-1/2 h-[60%] rounded-r-2xl overflow-hidden flex justify-center items-center border'>

                    <div className='relative  w-full h-full  overflow-hidden'>
                        {/* image */}
                        <Image src="/images/Login.jpg" fill={true} alt='loginimg' className='object-cover transform scale-150' />

                    </div>
                    <div className=' w-full h-full  text-black  rounded-2xl overflow-hidden'>
                        {/* content */}
                        <form className=' h-full flex flex-col justify-evenly items-center font-semibold ' onSubmit={handleSubmit}>
                            <div className='  flex items-center  h-1/3 w-full px-3'>

                                <label htmlFor="email" className=''>Email : &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <input id='email' name='email' type='email' className=' border rounded px-1' onChange={handleOnchange}></input>

                            </div>
                            <div className='  flex items-center  h-1/3 w-full px-3'>

                                <label htmlFor="password">Password  : &nbsp;</label>
                                <input id='password' name='password' type='password' className='border rounded px-1' onChange={handleOnchange}></input>

                            </div>
                            <button type='submit' className='cursor-pointer rounded  bg-blue-400 text-white hover:ring-1 w-1/2  hover:ring-white hover:bg-blue-900' >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login