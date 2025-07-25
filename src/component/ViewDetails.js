import Link from 'next/link'
import React from 'react'

const ViewDetails = (props) => {
  return (
    <>
    <Link href={`/Products/${props.ids}`} className='rounded-xl p-1 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 absolute left-40 w-22 text-center bottom-2'>Details</Link>
    
    
    
    </>
  )
}

export default ViewDetails