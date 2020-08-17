import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Search from '../components/Search'

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
      console.log('search result', response.data)
      this.setState({ filteredBeers: response.data })
    })
    .catch((err) => console.log(err));
  }

  render() {
    const showBeers = this.state.filteredBeers.map(beer => {
      return (
        <article key={beer._id}>
          <img src={beer.image_url} alt="beer pic" width="100" />
          <Link to={`/beers/${beer._id}`}>
            <h4>{beer.name}</h4>
          </Link>
          <h5>{beer.tagline}</h5>
          <p>Creator: {beer.contributed_by}</p>
        </article>
      )
    })

    return (
      <div>
        <h1>All beers</h1>
        <Header />

        <Search filterBeers={this.filterBeers} />

        <button onClick={this.fetchAllBeers} id="show-all">
          Show all beers
        </button>

        {showBeers}
      </div>
    )
  }
}

export default BeersList