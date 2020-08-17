import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({ _id, name, tagline, image_url, contributed_by }) => {
  return (
    <article>
      <img src={image_url} alt="beer pic" width="100" />
      <Link to={`/beers/${_id}`}>
        <h4>{name}</h4>
      </Link>
      <h5>{tagline}</h5>
      <p>Creator: {contributed_by}</p>
    </article>
  )
}

export default BeerCard