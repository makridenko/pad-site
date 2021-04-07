/* React */
import React, { Fragment } from 'react';

/* Components */
import NavbarDesktop from '../../components/NavbarDesktop';
import NavbarMobile from '../../components/NavbarMobile';


const Navbar = () => (
    <Fragment>
        <NavbarDesktop />
        <NavbarMobile />
    </Fragment>
);

export default Navbar;