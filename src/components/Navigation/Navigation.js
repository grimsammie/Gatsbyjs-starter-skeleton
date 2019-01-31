import React, { Component } from 'react';
import { Link }  from 'gatsby';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Aux from '../../hoc/Auxiliary'

import './Navigation.scss';

class Navigation extends Component{
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

      render(){

            return(
                  <Aux>
                        <Navbar light expand="md">
                              <div className="container">
                                    <NavbarBrand href="/">Your Brand <span role="img" aria-label="rocket"> 🚀</span>
                                    </NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                          <Nav className="ml-auto" navbar>
                                                <NavItem>
                                                      <Link className="nav-link" to="/">Home</Link>
                                                </NavItem>                                            
                                                <NavItem>
                                                      <AnchorLink className="nav-link" href="#video-section">Section Scroll</AnchorLink>
                                                </NavItem>
                                                <NavItem>
                                                      <Link className="nav-link" to="/page-2">Page 2 Link</Link>
                                                </NavItem>                                          
                                                <NavItem>
                                                      <NavLink href="https://github.com/shal0mdave"> <FontAwesomeIcon icon={faGithub} /> GitHub</NavLink>
                                                </NavItem>
                                          </Nav>
                                    </Collapse>                              
                              </div>
                        </Navbar>
                  </Aux>
            );
      }
}

export default Navigation;

