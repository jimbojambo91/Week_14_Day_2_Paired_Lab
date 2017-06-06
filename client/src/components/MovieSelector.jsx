import React from 'react';

class MovieSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
      const options = this.props.movies.map((movie, index) => {
        return <option value={index} key={index}>{movie.show_title}</option>
      });
      return(
      <select id="movies" onChange={this.handleChange} value={this.state.selectedIndex}>
       {options}
      </select>
    );
  }
  handleChange(event){
    const index = event.target.value
    this.setState({selectedIndex: index});

    const movie = this.props.movies[index];
    this.props.onSelectMovie(movie);
  }
}

export default MovieSelector;