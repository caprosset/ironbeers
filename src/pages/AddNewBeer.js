import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header';

class AddNewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  }

  handleChange = e => {
    let { name, value } = e.target;
    if(name === "attenuation_level") value = Number(value);
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
    .then( () => {
      // console.log('New beer created!');
      this.props.history.push('/beers');
    })
    .catch( (err) => console.log(err));
  } 

  render() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    return (
      <div>
        <Header />

        <h2>Add new beer</h2>

        <form onSubmit={this.handleSubmit} id="add-beer-form">
          <div>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </div>
          
          <div>
            <label>Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={this.handleChange} />
          </div>
          
          <div>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={this.handleChange} />
          </div>

          <div>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={first_brewed} onChange={this.handleChange} />
          </div>

          <div>
            <label>Brewer tips</label>
            <input type="text" name="brewers_tips" value={brewers_tips} onChange={this.handleChange} />
          </div>

          <div>
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" value={attenuation_level} onChange={this.handleChange} />
          </div>

          <div>
            <label>Contributed by</label>
            <input type="text" name="contributed_by" value={contributed_by} onChange={this.handleChange} />
          </div>

          <div>
            <input type="submit" value="Add new beer" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddNewBeer