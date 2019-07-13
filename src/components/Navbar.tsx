import React from 'react'
import { Link } from 'gatsby'
import Container from './Container';

interface iNavbarProps {
  className?: any
}

const Navbar:React.SFC<iNavbarProps> = (props) => {
  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
      className={props.className}
    >
      <Container id="navbarContainer">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            Home
          </Link>
        </div>
        <div>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
