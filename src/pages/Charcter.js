import React from "react"
import { useCharacter } from "../hooks/useCharacter"
import './Character.css'
import { useParams } from "react-router"

export default function Character () {
    const {id} = useParams()
    const {data, error, loading} = useCharacter(id)
    if (error) {
        return <h1>There is an error</h1>
    }
    if (loading ) {
        return <h1> Loading .....</h1>
    }
    return (
        <div className="character">
            <img src={data.character.image} alt = {data?.character?.id} width={750} height={750} />
            <div className="character-content">
               <h1>{data?.character?.name}</h1>
               <p>{data?.character?.gender}</p>
               <div className="character-episode">
                    {            data?.character?.episode.map((item) => {
                        return (
                            <div key={item.name}>
                                {item.name} = <b>{item.episode}</b>
                            </div>
                        )
                    })
}
               </div>
            </div>
        </div>
    )
}
