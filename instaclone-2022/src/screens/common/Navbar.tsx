import React , {useRef,useState,useEffect} from 'react'
import { Nav, Navbar, Container, Form, FormControl, NavDropdown,Modal } from 'react-bootstrap'
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
import FileUpload from './NavbarComponent/FileUpload';

function NavbarComponent() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [fileURL,setFileURL] = useState("")
    const [ModalSize , setModalSize] = useState({width: "760px",marginLeft:"580px"})
    const [description,setDescription] = useState("")
    const [location,setLocation] = useState("")
    const [replacedText,setReplacedText] = useState("")
    const [commentOff,setCommentOff] = useState(false)
    const [fileType,setFileType] = useState("")

    const handleShowUploadModal = () => {
        setShowUploadModal(true);
    }

    const handleCloseUploadModal = () => {
        setFileURL("")
        setModalSize({ width: "760px", marginLeft: "580px" })
        setShowUploadModal(false);
        setDescription("")
        setLocation("")
        setReplacedText("")
        setCommentOff(false)
        setFileType("")
    }
    const handleLogout = () => { //로그아웃
        authService.signOut()
    }

    return (
        <div style={{ border: "0.5px solid rgb(200, 200, 200)",backgroundColor:"white" }}>
            <Container style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginLeft: '470px', backgroundColor: 'white',marginTop: '5px',height:"53px" }}>
                <Navbar.Brand><Link to="/"><img src="img/instaLogo.png" style={{marginTop:"5px"}}/></Link></Navbar.Brand>
                <Form className="d-flex" style={{ width: '310px', marginTop:'7px' , marginLeft: '210px' , height: '40px'  }}>
                    <FormControl type="search" placeholder="검색" className="me-5" aria-label="Search" style={{backgroundColor:"rgb(236, 236, 236)",marginBottom:"5px", borderRadius:"6px"}}/>
                </Form>
                <Nav className="me-auto" style={{ margin:'5px 0 0 30px' }}>
                    <Nav.Link style={{ marginRight: "-10px" }}><Link to=""><GrHomeRounded size="23" color='black' /></Link></Nav.Link>
                    <Nav.Link style={{ marginRight: "-10px" }}><Link to=""><FaRegPaperPlane size="23" color='black' /></Link></Nav.Link>
                    <Nav.Link style={{ marginRight: "-10px" }} onClick={handleShowUploadModal}><FiPlusSquare size="25" color='black' /></Nav.Link>
                    <Nav.Link style={{ marginRight: "-10px" }}><Link to=""><GrCompass size="25" color='black' /></Link></Nav.Link>
                    <Nav.Link style={{ marginRight: "-10px" }}><Link to=""><AiOutlineHeart size="25" color='black' /></Link></Nav.Link>
                    <Nav.Link style={{ marginRight: "-10px" }}><Link to=""><CgProfile size="25" color='black' /></Link></Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown" style={{marginLeft:"-35px"}}>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/"><CgProfile style={{ marginTop: '-3px' }} size="17" color='black' />&nbsp;&nbsp;&nbsp;프로필</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/"><AiOutlineSave style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;저장됨</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/"><FiSettings style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;설정</Link></NavDropdown.Item>
                            <NavDropdown.Item style={{ fontSize: "13px", height: "30px" }}><Link style={{ color: "black" }} to="/"><GrPowerCycle style={{ marginTop: '-3px' }} size="17" />&nbsp;&nbsp;&nbsp;계정 전환</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item style={{ fontSize: "13px" }} onClick={handleLogout}>로그아웃</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
            {
                showUploadModal ? <FileUpload showUploadModal={showUploadModal} handleCloseUploadModal={handleCloseUploadModal} /> : null
            }
        </div>
    )
}

export default NavbarComponent

