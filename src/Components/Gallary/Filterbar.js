import React from 'react'

const Filterbar = ({filterItem, list}) => {
    return (
        <>
            
            <div>
            <div className="btn-grp">
                {
                    list.map((curElem) => {
                        return (
                            <button key={curElem.id} className="p-8" onClick={() => filterItem(curElem)}>{curElem}</button>
                        )
                    })


                    
                }
            </div>

        </div>
        </>
    )
}

export default Filterbar
