import movies from "../movies.js";
import { v4 as uuid } from 'uuid';

export default {
    findOne(movieId) {
        const result = movies.find(movie => movie.id === movieId);

        return result;
    },
    create(movieData) {
        const newId = uuid();

        movies.push({
            id: newId,
            ...movieData,
        });

        return newId;
    }
}