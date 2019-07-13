import React from 'react'
import { Link } from 'gatsby'
import Container from './Container';
import IconBlog from './IconBlog';
import IconContact from './IconContact';
import IconCube from './IconCube';
import IconBuilding from './IconBuilding';

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
      <Container id="menubar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            Home
          </Link>
        </div>
        <div>
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              <IconBuilding/> About
            </Link>
            <Link className="navbar-item" to="/products">
              <IconCube/> Products
            </Link>
            <Link className="navbar-item" to="/blog">
              <IconBlog/> Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              <IconContact /> Contact
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
