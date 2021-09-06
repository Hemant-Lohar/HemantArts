import React from 'react'

const Filterbar = ({filterItem, list}) => {
    return (
        <>
            
            
            <div className="btn-grp flex justify-center ">
                {
                    list.map((curElem) => {
                        return (
                            <button key={curElem.id} className="btn px-4 py-2 mx-8 my-4 border-b-2 hover:border-red-600 focus:border-red-600 focus:bg-gray-100 rounded-t-md text-gray-500 focus:text-gray-900 " onClick={() => filterItem(curElem)}>{curElem}</button>
                        )
                    })                 
                }
            </div>

       
        </>
    )
}

export default Filterbar
