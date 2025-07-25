import Addtocart from '@/component/Addtocart'
import ViewDetails from '@/component/ViewDetails'
import data_array from '@/data'
import Image from 'next/image'
import React from 'react'

const Products = async () => {
    const data = await fetch("http://localhost:3000/api/ProductAddRoute",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        },
        

    })

    const res = await data.json();
    const d_array = res.arr;

    return (
        <>

            <div className='flex justify-center items-center relative'>
                <hr className='w-1/3 absolute left-0 mx-2' ></hr>
                <h1 className='inline text-3xl font-semibold p-4 capitalize' >Products</h1>
                <hr className='w-1/3 absolute right-0 mx-2'></hr>
            </div>
            <div className="  flex h-auto flex-wrap  justify-center gap-1  my-5 ">

                {/* single item */}
                {d_array.map((item, index) => {

                    return (
                        <div key={index} className='w-1/5  min-h-[50vh]  max-h-auto  flex flex-col justify-center items-center flex-none  border rounded-xl bg-white '>
                            <div className='relative w-1/3  h-1/2  flex justify-center items-center'>
                                {/* image */}
                                <Image src={item.image} alt='slideimg' fill={true} className='object-contain ' />
                            </div>
                            <div className=' w-full h-1/2 relative text-white bg-black rounded-xl'>
                                {/* content */}
                                <p className=' font-bold text-xl px-2 my-2 text-white'>{item.title.length >= 30 ? item.title.slice(0, 31) : item.title}...</p>
                                <p className='italic p-3 my-3 '>{item.description.length >= 110 ? item.description.slice(0, 111) : item.description}...</p>
                                <p className='absolute right-4 bottom-2.5 font-semibold italic '> $ {item.price}</p>
                                {/* <button className='rounded-xl p-1 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 absolute left-2 bottom-2'>Add to cart</button> */}
                                <Addtocart item={item}/>
                                <ViewDetails ids={item.id}/>
                            </div>

                        </div>)
                })
                }
            </div>

        </>
    )
}

export default Products