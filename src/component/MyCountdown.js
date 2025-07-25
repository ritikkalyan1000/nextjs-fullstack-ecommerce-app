"use client"
import React from 'react'
import Countdown from 'react-countdown'

const MyCountdown = () => {
    // console.log(Date)
  return (
    <>
    <Countdown date={new Date("2025-06-01T12:00:00")} className='text-4xl  font-bold text-white tracking-wider italic'/>
    </>
  )
}

export default MyCountdown