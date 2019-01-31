import React from 'react';
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Aux'

import 'bootstrap/scss/bootstrap.scss';

const Layout = (props) => (
      <Aux>
            <Navigation />
            {props.children}
            <ScrollUpButton />
            <Footer />
      </Aux>
);

export default Layout;
