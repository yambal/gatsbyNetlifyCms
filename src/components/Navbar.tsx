import React, { useState } from 'react'
import { Link } from 'gatsby'
import IconBlog from './IconBlog';
import IconContact from './IconContact';
import IconCube from './IconCube';
import IconBuilding from './IconBuilding';
import IconVilal from './IconVilal';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UtilitiySite from '../utilities/UtilitiySite'

interface iNavbarProps {
  className?: any
}

const Navbar:React.FC<iNavbarProps> = (props) => {
 
  const [isOpen, toggle] = useState(false);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => { toggle(!isOpen) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link to="/" className="navbar-item" title="Logo">
              {UtilitiySite.siteMetaData().title}
            </Link>
          </Typography>
          {false && <div>
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
              <Link className="navbar-item" to="/contact/StyledComponentSample">
                <IconVilal /> StyledComponent Sample
              </Link>
              <Link className="navbar-item" to="/web-services">
                <IconVilal /> Web Services
              </Link>
            </div>
          </div>}
        </Toolbar>
      </AppBar>
      <Drawer open={isOpen} onClose={() => toggle(!isOpen)}>
        <List style={{ width: '250px' }}>
          <ListItem button>
            <Link className="navbar-item" to="/about">
              <ListItemText primary={'ABOUT'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="navbar-item" to="/products">
              <ListItemText primary={'Product'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="navbar-item" to="/blog">
              <ListItemText primary={'Blog'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="navbar-item" to="/contact">
              <ListItemText primary={'Contact'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="navbar-item" to="/contact/StyledComponentSample">
              <ListItemText primary={'StyledComponent Sample'} />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="navbar-item" to="/web-services">
              <ListItemText primary={'Web Services'} />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar
