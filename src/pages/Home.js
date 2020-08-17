import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="category-page">
        <img src="images/beers.png" alt="All beers pic" />
        <Link to="/beers">
          <h2>All beers</h2>
        </Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate vel a sunt praesentium, maiores nihil, ratione perspiciatis quidem atque iusto magni. Saepe maiores sed ab labore, pariatur voluptatem repudiandae!</p>
      </div>
      
      <div className="category-page"> 
        <img src="images/random-beer.png" alt="Random beer pic"/>
        <Link to="/beers/random">
          <h2>Random beer</h2>
        </Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate vel a sunt praesentium, maiores nihil, ratione perspiciatis quidem atque iusto magni. Saepe maiores sed ab labore, pariatur voluptatem repudiandae!</p>
      </div>
    
      <div className="category-page">
        <img src="images/new-beer.png" alt="New beer pic"/>
        <Link to="/new-beer">
          <h2>New beer</h2>
        </Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptate vel a sunt praesentium, maiores nihil, ratione perspiciatis quidem atque iusto magni. Saepe maiores sed ab labore, pariatur voluptatem repudiandae!</p>
      </div>
    </div>
  )
}

export default Home;