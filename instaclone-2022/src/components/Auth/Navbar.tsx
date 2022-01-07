import React , {useRef,useState} from 'react'
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
import { Button } from 'antd';


// type uploadFileType  = {
//     target: input,
//     type: string,
// }


function NavbarComponent() {
    const handleLogout = ()=>{ //로그아웃
        authService.signOut()
    }
    const [showUploadModal, setShowUploadModal] = useState(false);
    const handleShowUploadModal = () => setShowUploadModal(true);
    const handleCloseUploadModal = () => setShowUploadModal(false);


    const fileUploadRef = useRef<HTMLInputElement>(null);
    const handleOpenFileUpload = ()=>{
        fileUploadRef.current&&fileUploadRef.current.click()
    }


    const handleUploadFile = async(event: { target: HTMLInputElement })=>{
        if(event.target.files)
        {
            const file = event.target.files[0]
            const metadata = {contentType: file.type}

            //storage에 파일저장(file,metadata설정후)
        try{ 
            // let uploadTaskSnapshot = await firebase.storage().ref().child(`user_image/${user.uid}`).put(file, metadata)  //user_image폴더안에 user.uid이름으로 저장
            // let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL() //storage에 올린 이미지url(promise니까 await로)
            
            // // 프로필 이미지 수정(authentication)
            // await firebase.auth().currentUser.updateProfile({
            //     photoURL: downloadURL
            // })

            // dispatch(setPhotoURL(downloadURL)) //리덕스안의 user의 photoURL 변경

            // //realtime 데이터베이스 이미지 수정
            // firebase.database().ref("users").child(user.uid).update({image:downloadURL})
        }catch(err){
            console.log(err)
        }

        }
    }


    return (
        <div style={{ border: "0.5px solid rgb(200, 200, 200)",backgroundColor:"white" }}>
            <Container style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginLeft: '470px', backgroundColor: 'white',marginTop: '5px' }}>
                <Navbar.Brand><Link to="/"><img src="img/instagram_logo.png" width={110} /></Link></Navbar.Brand>
                <Form className="d-flex" style={{ width: '310px', marginLeft: '210px' , height: '30px',marginTop:'11px' }}>
                    <FormControl type="search" placeholder="검색" className="me-5" aria-label="Search" />
                </Form>
                <Nav className="me-auto" style={{ marginLeft: '30px' }}>
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
                <Modal size="lg"aria-labelledby="contained-modal-title-vcenter"centered show={showUploadModal} onHide={handleCloseUploadModal} style={{width:"760px" , marginLeft:"570px"}}>
                    <div style={{ height: '800px', borderRadius: '30px' }}>
                        <div className='modal1' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", fontWeight: "550", fontSize: "16px" }}>새 게시물 만들기</div>
                        <Modal.Body>
                            <div style={{marginLeft:"280px",marginTop:"270px"}}><img src="img/upload_image.png"/></div>
                            <div style={{fontSize:"22px",textAlign:"center",fontWeight:"lighter",color:"rgb(71, 71, 71)"}}>사진과 동영상을 여기에 끌어다 놓으세요</div>
                            <Button type="primary" style={{marginLeft:"300px",marginTop:"15px"}} onClick={handleOpenFileUpload}>컴퓨터에서선택</Button>
                            <input type="file" ref={fileUploadRef} onChange={handleUploadFile} style={{display:"none"}}/>
                        </Modal.Body>
                    </div>
                </Modal>
            </div>
    )
}

//https://react-bootstrap.netlify.app/components/navbar
//https://react-icons.github.io/react-icons/search?q=heart
export default NavbarComponent

