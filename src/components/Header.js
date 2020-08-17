import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img src="./../images/home-nav.png" alt="home icon" />
      </Link>
    </div>
  )
}
