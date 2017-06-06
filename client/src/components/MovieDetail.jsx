import React from 'react';

class MovieDetail extends React.Component {
  render(){
    if(this.props.movie === null) return null;
    return (
      <div className="movie-details">
        <h3>{this.props.movie.show_title}</h3>
        <h4>Year: {this.props.movie.release_year}</h4>
        <p>Category:{this.props.movie.category}</p>
        <p>Director:{this.props.movie.director}</p>
        <img src= {this.props.movie.poster}></img>

      </div>
    );
  }
}

export default MovieDetail;