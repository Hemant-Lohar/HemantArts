import React from 'react'

const Card = ({CardData}) => {
    return (
        <>
            <div className=" ">
                <section className=" flex flex-row flex-wrap justify-around mx-40">
                    {
                        CardData.map((curElem) => {
                            const {id, image, title} = curElem
                            return (
                                <>
                                <div className="imgBox mx-8 my-4" key={id}>
                                    <div className="img">
                                        <img className="w-48" src={image} alt="Image" />
                                    </div>
                                    <p>
                                        {title}
                                    </p>
                                </div>
                                </>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}

export default Card
