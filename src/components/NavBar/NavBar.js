import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Nav  , Button} from 'react-bootstrap'
import './NavBar.css';

const NavBar = () =>{

    return (
      <div className="nav-style" >
        <Navbar bg="light" variant="light">
          <Navbar.Brand  href="#high"><div className="nav-brand">Project10</div></Navbar.Brand>
            <div className="container">
              <div className="navbar-collapse">
                <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                    <Nav.Link href="#" active >Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">About</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     </li>
                   <li className="nav-item">
                    <Nav.Link href="#">E-Learning</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">School Supplies</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">Donations</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                   <li className="nav-item">
                    <Nav.Link href="#">Contact Us</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>                   
                </ul>
            {/*
              <Nav.Link href="#" active >Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#">About</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#">E-Learning</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#">School Supplies</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#">Donations</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#">Contact Us</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav>   */}
            <Button variant="primary" size='lg' className= "nav-button__login">Login</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="primary" size='lg' className= "nav-button__signup">Sign Up</Button>
          </div>
          </div>
          
        </Navbar>

            {/* 

            <!-- sample to be deleted -->

        <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
          <div class="container">
              <a class="navbar-brand logo" href="index.html" style="text-align: center; font-weight: bold;">learn.edu</a>
              <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="courses.html">courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="instructors.html">our instructors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact-us.html">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">sign-in/sign-up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- sample to be deleted -->
        */}

      </div>
    );
    
}

export default NavBar;