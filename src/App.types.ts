export interface AppState {
    movies: MoviesState
}

export interface MoviesState {
    loading: boolean,
    movies: Array<Movie>
}

export interface Movie {
    title: string,
    genre: string
}

export interface MoviesAction {
    type: string
}