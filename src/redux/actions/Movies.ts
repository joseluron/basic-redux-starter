import { Store, AnyAction } from 'redux';

const fetchedMovies = (): AnyAction => {
    return {
        type: "MOVIES_FETCH_SUCCESS"
    }
}

export const fetchMovies = () => (dispatch: Store['dispatch']) => {
    dispatch(fetchedMovies());
}
