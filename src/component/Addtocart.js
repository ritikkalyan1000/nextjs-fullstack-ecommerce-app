

"use client"

import { useSession } from 'next-auth/react';
import React from 'react';





const Addtocart = (props) => { // in prop we take full item title description price category

  const { data: session } = useSession();



  const handleclick = async () => {

    if (!session || !session.user) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    const userids = session.user.id;
    console.log(userids)

    const new_items = {
      userid: userids,
      productid: props.item._id,

    }



    const data = await fetch("/api/CartData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_items),
    });

    const res = await data.json();

    console.log(res.msg); // You can show toast here

    // response will be message like on navabr item added in your cart for timeout

  }


  return (
    <>
      <button className='rounded-xl p-1 cursor-pointer bg-gray-700 text-white hover:bg-gray-900 absolute left-2 bottom-2' onClick={handleclick}>Add to cart</button>


    </>
  )
}

export default Addtocart