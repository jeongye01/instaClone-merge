import React,{useState,useRef} from 'react'
import NavbarComponent from '../components/Auth/Navbar'
import { Button } from 'antd';
import { Link } from "react-router-dom";
import {AiOutlineTable} from 'react-icons/ai'
import {AiOutlineSave} from 'react-icons/ai'
import {MdDisabledVisible, MdOutlinePhotoCameraFront} from 'react-icons/md'
import {BsInfoCircle} from  'react-icons/bs'
import {Modal} from 'react-bootstrap'
import { authService } from '../fbase'
import "antd/dist/antd.css";
import "./myprofile.css"


function MyprofilePage() {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLInputElement>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpenModal = () => {
        modalRef.current && modalRef.current.click()
    }
    const handleLogout = ()=>{ //로그아웃
        authService.signOut()
    }
    return (
        <>
            <div className="app">
                <NavbarComponent />
                <div className="profile_container" style={{ marginTop: '35px', display: 'flex' }}>
                    <div className="item" style={{ marginLeft: '550px', height: '200px', width: '260px' }} ><img src="img/profile_image.jpg" width={150} /></div>
                    <div className="item" style={{ height: '200px', width: '300px' }}>
                        <span style={{ fontSize: '30px', fontWeight: 'lighter' }}>dltpwjd123</span>
                        <Button className="profile_button"style={{ position: 'absolute', left: '970px', top: '115px' }}><Link to="/myprofile-setting">프로필 편집</Link></Button>
                        <BsInfoCircle style={{ cursor: 'pointer', position: 'absolute', left: '1090px', top: '120px' }} size={25} onClick={handleOpenModal} />
                        <Button onClick={handleShow} ref={modalRef} style={{ display: 'none' }}></Button>
                        <p style={{ fontSize: '17px', marginTop: '15px' }}>게시물 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팔로워 0
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팔로우 43</p>
                        <p style={{ fontWeight: 'bold', fontSize: '17px' }}>이세정</p>
                    </div>
                </div>
                <div style={{ height: '50px', width: '940px', margin: 'auto', borderTop: '1px solid rgb(200, 200, 200)', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', fontSize: '13px' }}><AiOutlineTable />&nbsp;&nbsp;게시물</div>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', fontSize: '13px' }}><AiOutlineSave />&nbsp;&nbsp;저장됨</div>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', fontSize: '13px' }}><MdOutlinePhotoCameraFront />&nbsp;&nbsp;태그됨</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginLeft: '490px' }}>
                        <img src="img/uploadDefault.jpg" height={370} width={379} />
                    </div>
                    <div style={{ width: '560px', backgroundColor: 'white' }}>
                    </div>
                </div>
                <Modal className="modal" show={show} onHide={handleClose} style={{ marginTop: '230px',marginLeft: '750px',width: '390px',backgroundColor:"gray" }}>
                    <div style={{borderRadius:"35px"}}>
                        <div className='modal1' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>비밀번호 변경</div>
                        <div className='modal2' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>네임 태그</div>
                        <div className='modal3' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>앱 및 웹사이트</div>
                        <div className='modal4' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>알림</div>
                        <div className='modal5' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>개인정보 및 보안</div>
                        <div className='modal6' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>로그인 활동</div>
                        <div className='modal7' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>instagram에서 보낸 이메일</div>
                        <div className='modal8' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }}>문제 신고</div>
                        <div className='modal9' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", cursor: "pointer" }} onClick={handleLogout}>로그아웃</div>
                        <div className='modal10' style={{ height: "45px", textAlign: "center", paddingTop: "10px", cursor: "pointer" }} onClick={handleClose}>취소</div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default MyprofilePage


{/* <Modal show={show} onHide={handleClose} style={{ marginTop: '230px' }}>
<Modal.Header closeButton>
    <Modal.Title>Modal</Modal.Title>
</Modal.Header>
<Modal.Body>
    <p>Modal body text goes here.</p>
</Modal.Body>
<Modal.Footer>
    <Button>Close</Button>
</Modal.Footer>
</Modal> */}
