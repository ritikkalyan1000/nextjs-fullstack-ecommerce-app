"use client"
import React, { createContext, useState } from 'react'


export const AmountContext = createContext();


export const AmountProvider = ({ children }) => {

    const [amount, setAmount] = useState(0)

    const settingAmount= (val) => {

        setAmount(val)
    }

    return (

        <AmountContext.Provider value={{ amount, settingAmount }}>
            {children}
        </AmountContext.Provider>

    )
}

