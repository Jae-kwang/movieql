import { getMovies, getById } from './db'

const resolvers = {
    Query: {
        movies: () => getMovies() ,
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMOvie: (_, { name, score }) => 
    }
}

export default resolvers