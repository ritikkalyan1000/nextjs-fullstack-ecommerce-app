import React from 'react'

const Footer = () => {
    return (
        <>
            <hr className='text-white' ></hr>
            <footer className="bg-gray-900 text-white py-6 ">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} Ritik's Store. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Contact</a>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer