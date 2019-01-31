import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Header.scss';

const Header = (props) => (
      <header>
            <div className="container">
                  <section className="header-contents">
                        <h1>{props.heading} </h1>
                        <p>{props.paragraph}</p>
                        <a
                              href="https://www.linkedin.com/in/shalom-david/"
                              target="_blank"
                              rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faGithub} /> Fork on Github
                        </a>                  
                  </section>
            </div>
      </header>
);

export default Header;