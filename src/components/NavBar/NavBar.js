import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Nav  , Button} from 'react-bootstrap'
import './NavBar.css';

const NavBar = () =>{

    return (
      <div className="nav-style" >
        <Navbar bg="light" variant="light">
          <Navbar.Brand  href="#high"><div className="nav-brand">Project10</div></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#" active >Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">About</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">E-Learning</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">School Supplies</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">Donations</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">Contact Us</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Nav>
          <Button variant="primary" size='lg' className= "nav-button__login">Login</Button>&nbsp;&nbsp;&nbsp;
          <Button variant="primary" size='lg' className= "nav-button__signup">Sign Up</Button>
          
        </Navbar>
      </div>
    );
    
}

export default NavBar;