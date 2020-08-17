import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'
import Search from '../components/Search'
import BeerCard from '../components/BeerCard'

class BeersList extends Component {
  state = {
    listOfBeers: [],
    filteredBeers: []
  }

  componentDidMount() {
    this.fetchAllBeers();
  }

  fetchAllBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then( (response) =>{
      const beers = response.data;
      this.setState({ listOfBeers: beers, filteredBeers: beers })
    })
    .catch( (err) => console.log(err));
  }

  filterBeers = (query) => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((response) => {
      const searchResult = response.data;
      this.setState({ filteredBeers: searchResult });
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>All beers</h1>

        <Search filterBeers={this.filterBeers} />

        <button onClick={this.fetchAllBeers} id="show-all">
          Show all beers
        </button>

        {this.state.filteredBeers.map(beer => {
          return (
            <BeerCard key={beer._id} {...beer} />
          )
        })}
      </div>
    )
  }
}

export default BeersList