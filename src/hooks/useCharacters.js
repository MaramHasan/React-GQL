import {gql, useQuery} from '@apollo/client'

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
export const useCharacters = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS)
    return {
        error, loading, data
    }

}