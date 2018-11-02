import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import NewMovieForm from './components/movieForm/newMovieForm.js';
import { createStore } from 'redux'
import movieApp from './movieApp.js';
import {
  addMovie,
  editMovie,
  deleteMovie,
} from './actions'
import Movie from './classes/Movie.js';
import WrappedMovieList from './components/movieList/wrappedMovieList.js'

const store = createStore(movieApp);

class App extends React.Component {

  constructor(props) {
    super(props);

    // Previous Implementation
    //this.state = {
    //  movieList: []
    //}

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    store.dispatch(addMovie(new Movie('Movie 1', 2, 1993)));
    store.dispatch(addMovie(new Movie('Movie 2', 3, 1993)));
    store.dispatch(addMovie(new Movie('Movie 3', 4, 1993)));
    //Previous implementation
    //this.addMovie = this.addMovie.bind(this);
    //this.editMovie = this.editMovie.bind(this);
    //this.deleteMovie = this.deleteMovie.bind(this);
  }

  addMovie(movie) {
    // Previous implementation
    /*

    var newMovieList = this.state.movieList.slice();
    newMovieList.push(movie);

    this.setState({
      movieList: newMovieList
    })
    */

    //Redux Implementation
    store.dispatch(addMovie(movie));
  }

  editMovie(newMovie, index) {
    // Previous implementation
    /*
    let newMovieList = this.state.movieList
        .slice(0, index)
        .concat([newMovieName])
        .concat(this.state.movieList.slice(index+1));

    this.setState({
      movieList: newMovieList
    });
    */

    //Redux Implementation
    store.dispatch(editMovie(index, newMovie));
  }

  deleteMovie(index) {
    // Previous implementation
    /*
    var newMovieList = this.state.movieList
        .slice(0, index)
        .concat(this.state.movieList.slice(index+1));


    this.setState({
      movieList: newMovieList
    });
    */

    //Redux Implementation
    store.dispatch(deleteMovie(index));
  }

  render() {
    return (
      <div>
        <div><NewMovieForm title='New Movie' onSubmit={this.addMovie} /></div>
        <div><WrappedMovieList onEdit={this.editMovie} onDelete={this.deleteMovie} /></div>
      </div>
    )
  }

}

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
