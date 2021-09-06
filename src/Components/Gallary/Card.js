import React from 'react'

const Card = ({CardData}) => {
    return (
        <>
            <div className="bg-gray-100 h-screen w-full">
                <section className="flex flex-row flex-wrap justify-center mx-40 pt-8">
                    {
                        CardData.map((curElem) => {
                            const {id, image, title} = curElem
                            return (
                                <>
                                <div className="imgBox bg-white m-4 h-full rounded-b-md shadow-md" key={id}>
                                    <div className="img">
                                        <img className="w-48  rounded-md" src={image} alt="Image" />
                                        <p className="py-2 ml-2 text-sm text-gray-500">
                                        #{title}
                                        </p>
                                    </div>
                                    
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
