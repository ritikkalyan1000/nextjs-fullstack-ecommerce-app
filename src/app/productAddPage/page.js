"use client";

import React, { useState } from "react";

const AddProductPage = () => {
    const [form, setForm] = useState({
        id: "",
        title: "",
        description: "",
        category: "",
        image: "",
        price: "",
        rate: "",
        count: "",
    });

    const [msg, setmsg] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", form);
        // You can send this data to backend API here using fetch or axios

        const form_data = await fetch("/api/ProductAddRoute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        const res = await form_data.json()

        setmsg(res.msg);

        

        setTimeout(() => {
            setmsg("")

        }, 2000);


    };

    return (

        <>
            <div className='flex justify-center items-center relative'>
                <hr className='w-1/3 absolute left-0 mx-2' ></hr>
                <h1 className='inline text-3xl font-semibold p-4'>Dashboard </h1>
                <hr className='w-1/3 absolute right-0 mx-2'></hr>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-[80vw] max-w-xl mx-auto mt-10 text-black"
            >
                <input
                    type="text"
                    name="id"
                    placeholder="ID"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="rate"
                    placeholder="Rate"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="count"
                    placeholder="Count"

                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-600  text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
                <span className=" text-center text-xl mb-10 font-bold italic text-green-600">{msg}  </span>
            </form>
        </>
    );
};

export default AddProductPage;
