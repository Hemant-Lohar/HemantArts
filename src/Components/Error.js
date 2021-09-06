import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <img className="w-64" src="./images/404error.svg" alt="Page Not Found" />
                <h1 className="mt-8 font-bold text-indigo-900 text-4xl">Page Not Found !</h1>
                <NavLink to="/"><button className="mt-8 px-4 py-2 border-2 border-indigo-800 rounded-full hover:bg-indigo-800 hover:text-white">Back to Home Page</button></NavLink>
            </div>
        </>
    )
}

export default Error
