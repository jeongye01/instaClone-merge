import React,{useState,useRef} from 'react'
import NavbarComponent from '../components/Auth/Navbar'
import { Button } from 'antd';
import { Link } from "react-router-dom";
import {AiOutlineTable} from 'react-icons/ai'
import {AiOutlineSave} from 'react-icons/ai'
import {MdOutlinePhotoCameraFront} from 'react-icons/md'
import {BsInfoCircle} from  'react-icons/bs'
import {Modal} from 'react-bootstrap'



function MyprofilePage() {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLInputElement>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOpenModal = ()=>{
        modalRef.current&&modalRef.current.click()
    }

    return (
        <>
            <div className="app">
                <NavbarComponent />
                <div className="profile_container" style={{ marginTop: '35px', display: 'flex' }}>
                    <div className="item" style={{ marginLeft: '550px', height: '200px', width: '260px' }} ><img src="img/profile_image.jpg" width={150} /></div>
                    <div className="item" style={{ height: '200px', width: '300px' }}>
                        <span style={{ fontSize: '30px', fontWeight: 'lighter' }}>dltpwjd123</span>
                        <Button style={{ position: 'absolute', left: '970px', top: '115px' }}><Link to="/myprofile-setting">프로필 편집</Link></Button>
                        <BsInfoCircle style={{ cursor: 'pointer', position: 'absolute', left: '1090px', top: '120px' }} size={25} onClick={handleOpenModal} />
                        <Button onClick={handleShow} ref={modalRef} style={{display:'none'}}>클릭</Button>
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
                <div style={{display: 'flex'}}>
                    <div style={{marginLeft:'490px'}}>
                        <img src="img/uploadDefault.jpg" height={370} width={379}/>
                    </div>
                    <div style={{width:'560px' , backgroundColor:'white'}}>
                        
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} style={{ marginTop: '230px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default MyprofilePage
