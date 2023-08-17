import React from 'react';
import './CharactersList.css'
import { useCharacters } from '../hooks/useCharacters';


export default function CharactersList() {
    const {data, error, loading} = useCharacters()
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
