import React from 'react';
import MovieSelector from '../components/MovieSelector';
import ActorSelector from '../components/ActorSelector';
import MovieDetail from '../components/MovieDetail';

class MovieContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
      selectedActor: null
    };
    this.setSelectedMovie = this.setSelectedMovie.bind(this);
    this.setSelectedActor = this.setSelectedActor.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  render(){
    return (
      <div>
        <h2>Movie Container</h2>
        <ActorSelector onSelectActor={this.setSelectedActor} componentDidMount={this.componentDidMount}/>
        <MovieSelector movies={this.state.movies} onSelectMovie={this.setSelectedMovie} />
        <MovieDetail movie={this.state.selectedMovie}/>
      </div>
    );
  }
  componentDidMount(actor){
    const url = "http://netflixroulette.net/api/api.php?actor=" + actor;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !==200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      console.log(this)
      this.setState({movies: data, selectedMovie: data[0]})
    });
    request.send();
  }
  setSelectedMovie(movie){
    this.setState({selectedMovie: movie});
  }
  setSelectedActor(actor){
    this.setState({selectedActor: actor});
  }
}

export default MovieContainer;