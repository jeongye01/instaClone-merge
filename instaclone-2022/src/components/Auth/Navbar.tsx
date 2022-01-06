import React from 'react'
import { Nav, Navbar, Container, Form, FormControl, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { authService } from '../../fbase'
import { GrHomeRounded } from 'react-icons/gr'
import {FaRegPaperPlane} from 'react-icons/fa'
import {FiPlusSquare}from 'react-icons/fi'
import {GrCompass,GrPowerCycle} from 'react-icons/gr'
import {AiOutlineHeart,AiOutlineSave} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'
import 'bootstrap/js/dist/modal'; 
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';




function NavbarComponent() {
    
    const handleLogout = ()=>{ //로그아웃
        authService.signOut()
    }
    return (
        <div style={{border:"0.5px solid rgb(200, 200, 200)"}}>
            <Navbar bg="light" expand="sm">
                <Container style={{  display: 'flex', justifyContent: 'center',margin:'auto', marginLeft: '470px' }}>
                    <Navbar.Brand><Link to="/myprofile"><img src="img/instagram_logo.png"  width={110} /></Link></Navbar.Brand>
                    <Form className="d-flex" style={{ width: '310px', marginLeft: '210px' }}>
                        <FormControl type="search" placeholder="검색" className="me-5" aria-label="Search" />
                    </Form>
                    <Nav className="me-auto" style={{ marginLeft: '30px' }}>
                        <Nav.Link style={{ marginRight: '7px' }}><Link to="myprofile"><GrHomeRounded size="23" color='black' /></Link></Nav.Link>
                        <Nav.Link style={{ marginRight: '7px' }}><Link to="myprofile"><FaRegPaperPlane size="23" color='black' /></Link></Nav.Link>
                        <Nav.Link style={{ marginRight: '5px' }}><Link to="myprofile"><FiPlusSquare size="25" color='black' /></Link></Nav.Link>
                        <Nav.Link style={{ marginRight: '4px' }}><Link to="myprofile"><GrCompass size="25" color='black' /></Link></Nav.Link>
                        <Nav.Link style={{ marginRight: '4px' }}><Link to="myprofile"><AiOutlineHeart size="25" color='black' /></Link></Nav.Link>
                        <Nav.Link style={{ marginRight: '4px' }}><Link to="myprofile"><CgProfile size="25" color='black' /></Link></Nav.Link>
                        <NavDropdown title="." id="basic-nav-dropdown" style={{ marginLeft: '-43px' }}>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/myprofile"><CgProfile style={{ marginTop: '-3px' }} size="17" color='black' />&nbsp;&nbsp;&nbsp;프로필</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/myprofile"><AiOutlineSave style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;저장됨</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/myprofile"><FiSettings style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;설정</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/myprofile"><GrPowerCycle style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;계정 전환</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ fontSize: "13px" }} onClick={handleLogout}>로그아웃</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

//https://react-bootstrap.netlify.app/components/navbar
//https://react-icons.github.io/react-icons/search?q=heart
export default NavbarComponent

