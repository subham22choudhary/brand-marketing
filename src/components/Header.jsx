import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='navigation-brand'>
            <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
            <Link to="/services" style={{ marginRight: '15px' }}>Services</Link>
            <Link to="/industries" style={{ marginRight: '15px' }}>Industries</Link>
            <Link to="/contact" style={{ marginRight: '15px' }}>Contact Us</Link>
        </nav>
    );
}

export default Header;
