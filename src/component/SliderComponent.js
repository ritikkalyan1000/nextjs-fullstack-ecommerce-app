import data_array from '@/data'
import Image from 'next/image'
import React from 'react'
import Addtocart from './Addtocart'
import ViewDetails from './ViewDetails'

const SliderComponent = async () => {

    const data = await fetch("http://localhost:3000/api/ProductAddRoute",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        

    })

    const res = await data.json();
    const d_array = res.arr;
    // console.log(d_array);

    
    return (
        <>

        <div className='flex justify-center items-center relative'>
            <hr className='w-1/3 absolute left-0 mx-2' ></hr>
            <h1 className='inline text-3xl font-semibold p-4'>Featured Items</h1>
            <hr className='w-1/3 absolute right-0 mx-2'></hr>
        </div>

            <div className='w-screen m-1 h-[45vh] overflow-hidden'>
                {/* wrapper */}
                <div className='h-full flex overflow-x-auto gap-1 '>


                    {/* single product */}
                    {d_array.map((item, index) => {

                        return (
                            <div key={index} className='w-1/5    h-full flex flex-col justify-center items-center flex-none  border rounded-xl bg-white '>
                                <div className='relative w-1/3 h-1/2  flex justify-center items-center'>
                                    {/* image */}
                                    <Image src={item.image} alt='slideimg' fill={true} className='object-contain ' />
                                </div>
                                <div className=' w-full h-1/2 relative text-white bg-black rounded-xl'>
                                    {/* content */}
                                    <p className=' font-bold text-xl px-2 my-2 text-white'>{item.title.length >= 30 ? item.title.slice(0, 31)  : item.title}...</p>
                                    <p className='italic p-3 my-3 '>{item.description.length >= 110 ? item.description.slice(0, 111)  : item.description}...</p>
                                    <p className='absolute right-4 bottom-2.5 font-semibold italic '> $ {item.price}</p>
                                    {/* <button className='rounded-xl p-1 cursor-pointer bg-gray-700 text-white hover:bg-black absolute left-2 bottom-2'>Add to cart</button> */}
                                    <Addtocart item={item}/>
                                    <ViewDetails ids={item.id}/>
                                </div>

                            </div>)
                    })


                    }
                </div>
            </div>

        </>
    )
}

export default SliderComponent