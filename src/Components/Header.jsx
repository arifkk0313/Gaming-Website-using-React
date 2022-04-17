import React from 'react'
import './Header.css'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InventoryIcon from '@mui/icons-material/Inventory';
import {Search} from '@mui/icons-material'
function Header() {
  return (
    <div>
        
        <Navbar expand="lg" style={{backgroundColor:'black'}} className='heado'>
  <Container >
    <div className="brand-head">
    
    <Navbar.Brand className='brand' ><SportsEsportsIcon style={{color:'blue',fontSize:50}} /> Game Station</Navbar.Brand>
    </div>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'white'}} />
    <Navbar.Collapse id="basic-navbar-nav" className='headings'>
      <Nav className="permalinks">
        
        <Nav.Link className='homesection' style={{color:'white'}}>Home</Nav.Link>
        <Nav.Link style={{color:'white'}}>Link</Nav.Link>
        <Nav.Link style={{color:'white'}}>Blog</Nav.Link>
        <Nav.Link style={{color:'white'}}>Contact</Nav.Link>
        <Nav.Link style={{color:'white'}}><InventoryIcon /></Nav.Link>
        <Nav.Link className='search' style={{color:'white'}}><Search /></Nav.Link>               
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default Header