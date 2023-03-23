import React, { useState } from 'react';
import '../styles/Navbar.css';
import { RiCloseFill, RiMenu4Line } from "react-icons/ri";
import styled from 'styled-components';
import { RegButton } from './Common';


const DDBtn = styled(RegButton)`
    background-color: #15bd15;
    border-radius: 2.5rem;
    padding: 0.8rem 1.8rem;
    font-size: 1.75rem;
`

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#home")

    const navItems = [
        { id: '#home', name: "Home" },
        { id: '#about', name: "About" },
        { id: '#guest', name: "Guest" },
        { id: '#venue', name: "Venue" },
        { id: '#contact', name: "Contact" },
        
    ]



    return (
        <>
            <nav className="d-flex navbar">

                <div className="d-flex left-nav">
                    <div className="hamburger" onClick={() => setOpen(!open)} >
                        {open ? <RiCloseFill /> : <RiMenu4Line />}
                    </div>

                    <div className="logo">
                        <a href="/">NIET IDEAS</a>
                    </div>
                </div>


                <ul className={`d-flex menu ${open && 'open'}`}>
                    {
                        navItems.map(ele => (
                            <li className="menu-item" key={ele.id}>
                                <a href={ele.id} className={`link menu-link ${ele.id === active ? 'active' : ''}`} onClick={() => { setOpen(!open); setActive(ele.id) }}>{ele.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className="d-flex right-nav" >
                    <button className="reg-btn"><a className='link' href="https://forms.office.com/r/e68e4BNCbC" target="_blank" rel="noreferrer">Register Now</a></button>

                    <DDBtn href="datadigest.html" target="_blank" rel="noreferrer" >Data Digest</DDBtn>
                </div>

            </nav>
        </>
    )
}

export default Navbar;