import React from 'react';
import './CharactersList.css'
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';


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
                            <Link to={`/${item.id}`} key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h1>{item.name}</h1>
                            </Link>
                        )
                    })
                }
                </div>

        }
        </div>
    )
}
