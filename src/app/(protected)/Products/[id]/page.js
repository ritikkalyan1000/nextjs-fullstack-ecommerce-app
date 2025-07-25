import Addtocart from '@/component/Addtocart';
import data_array from '@/data';
import Image from 'next/image';
import React from 'react'

const ProductIDPage = async ({ params }) => {

    const first = await params;
    const second = await first.id; 
    console.log(typeof second); // this is String there fore we need to parse it 

    const data = await fetch("http://localhost:3000/api/ProductAddRoute", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },


    })

    const res = await data.json();
    const d_array = res.arr;

    const new_element_array = d_array.filter((item) => {

        return item.id === parseInt(second);
    })

    // console.log(new_element_array)

    return (
        <>
            <div className='flex justify-center items-center'>

                <div className='border w-[60vw] h-[60vh] flex m-10 '>
                    <div className='w-1/3 h-full  border flex flex-col justify-center items-center relative '>
                        {/* image */}
                        <Image src={new_element_array[0].image} fill={true} alt='img' className='object-contain' />




                        <p className=' rounded-xl p-1 w-1/3 cursor-pointer bg-gray-700 text-white hover:bg-gray-900  text-center z-10 absolute bottom-2 right-4 '>$ {new_element_array[0].price}</p>
                        {/* <button className='rounded-xl p-1 w-1/3 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 absolute left-2 bottom-2'>Add to cart</button> */}
                        <Addtocart />




                    </div>
                    <div className='bg-gray-900 w-2/3 h-full text-white '>
                        {/* content */}
                        <p className='font-semibold text-2xl my-8 mx-10'>{new_element_array[0].title}</p>
                        <p className='font-semibold  my-8 mx-10 italic w-1/2 '>{new_element_array[0].description}</p>
                        <p className='font-semibold italic  my-8 mx-10 capitalize'>{new_element_array[0].category}</p>
                        <p className='font-semibold italic  my-8 mx-10'>Rating : {new_element_array[0].rate}</p>
                        <p className='font-semibold italic  my-8 mx-10'>Total sales : {new_element_array[0].count}</p>

                    </div>
                </div>


            </div>

        </>
    )
}

export default ProductIDPage