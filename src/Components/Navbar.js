import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="pt-16">
                <nav className="flex  justify-around w-full py-4 text-gray-700 shadow-md z-50 bg-white fixed top-0">
                    <div className="logo font-bold ">
                        Hemant Arts
                    </div>
                
                        <ul className="flex justify-between font-medium">

                            <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><NavLink to="/">Home</NavLink></li>
                           
                           <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><NavLink to="/gallary">Gallary</NavLink></li>

                           <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><NavLink to="/services">Services</NavLink></li>
                           
                           <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><NavLink to="/about">About</NavLink></li>
                        </ul>
                
                </nav>
            </div>
        </>
    )
}

export default Navbar

