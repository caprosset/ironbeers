import React, { Component } from 'react'
import axios from 'axios';
import Header from '../components/Header';

class BeerDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  } 

  componentDidMount() {
    const { pathname } = this.props.history.location;
    if(pathname === '/beers/random') {
      this.getRandomBeer()  
    } else {    
      this.getSingleBeer()
    }  
  }

  getSingleBeer = () => {
    const { id } = this.props.match.params;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then( (response) => this.setState(response.data)) 
    .catch( (err) => console.log(err));
  }

  getRandomBeer = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random') 
    .then( (response) => this.setState(response.data)) 
    .catch( (err) => console.log(err));
  } 

  render() {
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
    return (
    <div>
      <Header />

      <h2>{name}</h2>
      
      <article>
        <img src={image_url} alt="beer pic" width="100" />
        <h4>{tagline}</h4>
        <p>{description}</p>
        <p><span>First brewed</span>: {first_brewed}</p>
        <p><span>Attenuation level</span>: {attenuation_level}</p>
        <p><span>Contributed by</span>: {contributed_by}</p>
      </article>

      <div className="btn">
        <button onClick={this.getRandomBeer}>Generate random beer</button>
      </div>

      <div className="btn">
        <button onClick={this.props.history.goBack}>Go back</button>
      </div>
    </div>
    )
  }
}

export default BeerDetails