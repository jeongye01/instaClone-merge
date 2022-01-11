import React,{useState,useEffect} from 'react'
import { Button } from 'antd';
import { Link } from "react-router-dom";
import {BsInfoCircle} from  'react-icons/bs'
import {Modal} from 'react-bootstrap'
import { authService } from '../fbase'
import "antd/dist/antd.css";
import "./myprofile.css"
import {AiOutlineTable} from 'react-icons/ai'
import {RiVideoLine} from 'react-icons/ri'
import {HiOutlinePhotograph} from'react-icons/hi'
import NavbarComponent from '../components/Auth/Navbar'
import Post from '../components/Auth/Post'
import Photo from '../components/Auth/Photo'
import Video from '../components/Auth/Video'
import {useSelector} from 'react-redux'
import {RootState} from '../redux/_reducers'




function MyprofilePage() {
    const user = useSelector((state:RootState) => state.user.currentUser)
    const [show, setShow] = useState(false);
    const [tab,setTab] = useState(0)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogout = () => { //로그아웃
        authService.signOut()
    }




    return (
        <>
            <div style={{minHeight:"850px"}}>
                <NavbarComponent />
                <div className="profile_container" style={{ marginTop: '35px', display: 'flex' }}>
                    <div className="item" style={{ marginLeft: '550px', height: '200px', width: '260px' }} ><img src="img/profile_image.jpg" width={150} /></div>
                    <div className="item" style={{ height: '200px', width: '300px' }}>
                        <span style={{ fontSize: '30px', fontWeight: 'lighter' }}>{user&&user.displayName}</span>
                        <Button className="profile_button" style={{ marginLeft:'20px' }}><Link to="/myprofile-setting">프로필 편집</Link></Button>
                        <BsInfoCircle style={{ cursor: 'pointer', marginLeft:'10px' }} size={25} onClick={handleShow}/>
                        <p style={{ fontSize: '17px', marginTop: '15px' }}>게시물 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팔로워 0
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;팔로우 43</p>
                    </div>
                </div>
                <div style={{ height: '50px', width: '930px', margin: 'auto', borderTop: '1px solid rgb(200, 200, 200)', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', marginLeft: '15px', fontSize: '13px' }} onClick={()=>{setTab(0)}}><AiOutlineTable />&nbsp;게시물</div>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', marginLeft: '15px', fontSize: '13px' }} onClick={() => {setTab(1)}}><HiOutlinePhotograph size={15} />&nbsp;사진</div>
                    <div style={{ cursor: 'pointer', height: '30px', width: '100px', marginTop: '15px', marginLeft: '10px', fontSize: '13px' }} onClick={() => {setTab(2)}}><RiVideoLine size={15} />&nbsp;동영상</div>
                </div>
                {
                    tab===0 ? <Post/> : 
                    tab===1 ? <Photo/> : <Video/>
                }
                <Modal className="modal" show={show} onHide={handleClose} style={{ marginTop: '230px', marginLeft: '750px', width: '390px' }}>
                    <div style={{ borderRadius: "35px" }}>
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



