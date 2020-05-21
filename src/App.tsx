import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { AppState } from './App.types';
import { fetchMovies } from './redux/actions/Movies';

interface appProps {
    fetchMovies: any,
    movies: any
}
const App = (props: appProps) => {
    const { fetchMovies, movies } = props;

    React.useEffect(() => {
        if (movies.loading) {
            fetchMovies();
        }
    }, [movies.loading, fetchMovies])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Look at the console log! The store is changing!</h1>
            </header>
        </div>
    );
}

const mapStateToProps = (state: AppState) => ({
    movies: state.movies
});

export default connect(mapStateToProps, { fetchMovies })(App);
