import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Logo */}
            <div className="logo">Tembea Afrika</div>
            {/* Navigation Menu */}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Articles</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
