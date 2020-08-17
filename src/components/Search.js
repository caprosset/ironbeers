import React, { Component } from 'react'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  }

  handleSubmit = e => { 
    e.preventDefault();
    this.props.filterBeers(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="search-bar">
        <input 
          type="text" 
          name="query" 
          placeholder="Search for a beer"
          value={this.state.query} 
          onChange={this.handleChange} 
        />
      </form>
    )
  }
}

export default Search
