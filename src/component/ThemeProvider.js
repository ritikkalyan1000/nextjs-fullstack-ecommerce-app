"use client"
import React, { createContext, useState } from 'react'


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [message, setMessage] = useState("")

    const settingMessage = (val) => {

        setMessage(val)
    }

    return (

        <ThemeContext.Provider value={{ message, settingMessage }}>
            {children}
        </ThemeContext.Provider>

    )
}

