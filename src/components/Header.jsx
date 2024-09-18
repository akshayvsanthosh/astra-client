import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
    const [isLoggedin, setIsLoggedin] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoggedin(sessionStorage.getItem("user"))
    }, [])

    // logOut
    const handleLogout = () => {
        sessionStorage.clear()
        navigate("/login")
    }

    // console.log(isLoggedin);
    
    return (
        <>
            <Navbar expand="lg" className="headerContainer w-100">
                <Container>
                    <Navbar.Brand >
                        <Link to={'/'} className='text-decoration-none '><img className='navLogo' src={logo} alt="LOGO" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/'}>Home</Link>
                            </Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/about'}>About</Link>
                            </Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/grvncsubmit'}>Tell us</Link>
                            </Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                <Link className='text-decoration-none text-white' to={'/dashboard'}>Dasboard</Link>
                            </Nav.Link>
                            <Nav.Link className='me-4 text-white fw-semibold'>
                                {isLoggedin ?
                                    <p onClick={handleLogout} className='mb-0 text-decoration-none text-white'><p className='mb-0'>LogOut</p></p>
                                :
                                    <Link className='text-decoration-none text-white' to={'/login'}>LogIn</Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
