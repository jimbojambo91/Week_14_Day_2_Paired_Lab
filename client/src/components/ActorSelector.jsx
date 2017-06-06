import React from 'react';

class ActorSelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedActor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  render() {
      return(
        <div className = "actor-search" onClick={this.handleButtonClick}>
          <input type="text" onChange={this.handleChange}></input>
          <button>Search Actor</button>
        </div>
      )
  }
  handleChange(event){
    const actor = event.target.value
    this.setState({selectedActor: actor});

    this.props.onSelectActor(actor);
  }
  handleButtonClick(event){
    console.log(this.state.selectedActor)
    this.props.componentDidMount(this.state.selectedActor);
  }
}

export default ActorSelector;