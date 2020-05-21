import { MoviesState, MoviesAction } from '../../App.types';

const initialMovies: MoviesState = {
    loading: true,
    movies: [
        {title: "Alien", genre: "Susto"},
        {title: "Toy Story", genre: "Animacion"}
    ]
};

const movies = (state = initialMovies, action: MoviesAction) => {
    switch (action.type) {
        case "MOVIES_FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
            }
        default:
            return {
                ...state
            }
    }
}

export default movies;
