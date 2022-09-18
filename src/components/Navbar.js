import './Navbar.css';
import React from 'react';

const Navbar = () => {
    const nav = React.createRef();
    const mobileView = React.createRef();

    const toggleBurger = () => {
        nav.current.classList.toggle('nav-active');
        for(let i = 0; i < nav.current.children.length; i++) {
            let link = nav.current.children[i];
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i  / 7 + 0.5}s`;
            }
        }
        mobileView.current.classList.toggle('toggle');
    }

    return (
        <nav>
            <div className="logo">
                <a href=""><h4>$mj_skorupinski</h4></a>
            </div>
            <ul className="nav-links" ref={nav}>
                <li>
                    <a href="">$articles</a>
                </li>
                <li>
                    <a href="">$art</a>
                </li>
                <li>
                    <a href="">$contact</a>
                </li>
            </ul>
            <div className="mobile-view" ref={mobileView} onClick={toggleBurger}>
                <div className="bread1"></div>
                <div className="bread2"></div>
                <div className="bread3"></div>
            </div>
        </nav>
    );
}

export default Navbar;