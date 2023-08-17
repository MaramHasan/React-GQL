import React from 'react';
import {useQuery, gql} from '@apollo/client'
import './CharactersList.css'

const GET_CHARACTERS = gql`
    query {
        characters {
        results{
            name
            image
            id
        }
        }
    }
`
export default function CharactersList() {
    const {error, loading, data} = useQuery(GET_CHARACTERS)
    return (
        <div>
            {error ? <h1>There is an error</h1> :
                loading ? <h1>Loading .... </h1> :
                <div className='charactersList'>
                {
                    data?.characters?.results?.map((item) => {
                        return (
                            <div key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
                </div>

        }
        </div>
    )
}
