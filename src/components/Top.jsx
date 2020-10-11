import React from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import profilePic from '../profilePic.jpg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Top extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="top" dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <span className='top__title'>{'Портфолио'}</span>
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='top__title' to="/posts">
                  <Button className='top__link'>{"Контакты"}</Button>
                  </Link>
              </NavItem>
            </Nav>
          {/* </Collapse> */}
        </Container>
      </Navbar>
    );
  }
}

export default Top;