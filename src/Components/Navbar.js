import React from 'react'

function Navbar() {
    return (
        <>
            <header className="flex container justify-around mt-8 pb-4 text-gray-700 shadow-lg">
                <div className="logo font-bold ">
                    Hemant Arts
                </div>
                
                    <ul className="flex justify-between font-medium ">
                       <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><a href="#">Home</a></li>
                       <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><a href="#">Gallary</a></li>
                       <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><a href="#">Services</a></li>
                       <li className="ml-8 hover:text-indigo-600 px-4 border-b-4 hover:border-indigo-600 active:border-indigo-600 border-white"><a href="#">About</a></li>
                    </ul>
               
            </header>
        </>
    )
}

export default Navbar

