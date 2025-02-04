import movies from "../movies.js";

export default {
    findOne(movieId) {
        const result = movies.find(movie => movie.id === movieId);

        return result;
    }
}