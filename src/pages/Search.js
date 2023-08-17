import React, { useState } from "react"
import {gql, useLazyQuery} from '@apollo/client'

const GET_CHARACTER_NAME = gql`
    query GetCharacterName($name: String!){
    characters (filter: {
        name: $name
    }) {
        results {
        location {
        name
        }
    }
    }
}`

export default function Search() {
    const [name, setName] = useState('')
    const [getLocations, {loading, error, data}] = useLazyQuery(GET_CHARACTER_NAME, {variables: {name}})

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => getLocations()}>Search</button>
            {loading && <div>Loading ....</div>}
            {error && <div>There is something wrong</div>}

            {data &&
                <ul>
                    {data.characters.results.map((character) => {
                        return (
                            <li key={character.location.name}>
                                {character.location.name}
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}