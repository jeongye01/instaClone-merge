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
import {HiOutlineArrowLeft} from 'react-icons/hi'
import 'bootstrap/js/dist/modal'; 
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Switch } from 'antd';
import {storageService,databaseService} from '../../fbase';
import firebase from '../../fbase'






function NavbarComponent() {
    const [showUploadModal, setShowUploadModal] = useState(false);
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [userUid,setUserUid] = useState("")
    const [userName,setUserName] = useState("")
    const [fileURL,setFileURL] = useState("")
    const [ModalSize , setModalSize] = useState({width: "760px",marginLeft:"580px"})
    const [accessibilitySize,setAccessibilitySize] = useState({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" })
    const [advancedSettingSize,setAdvancedSettingSize] = useState({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)"})
    const [accessibilityToggle ,setAccessibilityToggle] = useState({ display:"none" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray" })
    const [advancedSettingToggle,setAdvancedSettingToggle] = useState({ display:"none" ,fontSize:"16px",padding:"10px 15px 0px 15px"})
    const [description,setDescription] = useState("")
    const [location,setLocation] = useState("")
    const [replacedText,setReplacedText] = useState("")
    const [commentOff,setCommentOff] = useState(false)
    const fileStorage = storageService.ref()
    const fileDatabase = databaseService.ref("fileUpload")


    useEffect(() => {
        authService.onAuthStateChanged((user) => {
          if (user) {
            if(typeof user.uid === "string" && typeof user.displayName === "string"){
                setUserUid(user.uid)
                setUserName(user.displayName)
            }
          }
        })
    }, []);

    const handleShowUploadModal = () => setShowUploadModal(true);
    const handleCloseUploadModal = () => {
        setFileURL("")
        setModalSize({ width: "760px",marginLeft:"580px"})
        setShowUploadModal(false);    
        setDescription("")
        setLocation("")
        setReplacedText("")
        setCommentOff(false)
    }
    const handleAccessibilitySize = () => {
        if(accessibilitySize.height==="45px"){
            setAccessibilitySize({ height: "190px", borderBottom: "1px solid rgb(214, 216, 206)"})
            setAccessibilityToggle({ display:"block" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray" })
        }
        else{
            setAccessibilitySize({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" })
            setAccessibilityToggle({ display:"none" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray"  })
        }      
    }
    const handleAdvancedSettingSize = () =>{
        if(advancedSettingSize.height==="45px"){
            setAdvancedSettingSize({ height: "200px", borderBottom: "0px solid rgb(214, 216, 206)"})
            setAdvancedSettingToggle({ display:"block" ,fontSize:"16px",padding:"10px 15px 0px 15px" })
        }
        else{
            setAdvancedSettingSize({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)"})
            setAdvancedSettingToggle({ display:"none" ,fontSize:"16px",padding:"10px 15px 0px 15px" })
        }
    }


    const handleLogout = () => { //로그아웃
        authService.signOut()
    }
    const handleOpenFileUpload = () => {
        fileUploadRef.current && fileUploadRef.current.click()
    }
    const handleUploadFile = async (event: { target: HTMLInputElement }) => {
        if (event.target.files)
        {
            const file = event.target.files[0]
            const metadata = {contentType: file.type}

            //storage에 파일저장(file,metadata설정후)
        try{ 
             let uploadTaskSnapshot = await fileStorage.child(`upload/${userUid}/${file.name}`).put(file, metadata)  //user_image폴더안에 user.uid이름으로 저장
             let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL() //storage에 올린 이미지url(promise니까 await로)
             setFileURL(downloadURL)
             setModalSize({ width: "1090px",marginLeft:"420px"})
            
            console.log(downloadURL)
        }catch(err){
            console.log(err)
        }

        }
    }

    //db에 업로드파일 저장
    const handleSubmit = async()=>{
        console.log('a')
        try{
            await fileDatabase.child(userUid).push().set(createFile(fileURL))
            handleCloseUploadModal()
        }catch(err){
            console.log(err)
            setDescription("")
            setLocation("")
            setReplacedText("")
            setCommentOff(false)
            setFileURL("")
        }

    }
    const createFile = (fileUrl: string) => {
        const file = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            description:description,
            location:location,
            replacedText:replacedText,
            commentOff:commentOff,
            fileUrl: fileUrl,
            user: {
                id: userUid,
                name: userName
            }
        }
        return file
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
            <Modal size="xl" centered show={showUploadModal} onHide={handleCloseUploadModal} style={ModalSize}>
                <div style={{ height: '790px', borderRadius: '30px' }}>
                    {
                        fileURL ?
                            <div>
                                <div style={{ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)", paddingTop: "10px", fontWeight: "550", fontSize: "16px" }}>
                                    <HiOutlineArrowLeft size={25} style={{ marginLeft: "15px", cursor: "pointer" }} onClick={handleCloseUploadModal} />
                                    <span style={{ marginLeft: "440px", color: "rgb(53, 52, 52)" }}>새 게시물 만들기</span>
                                    <button onClick={handleSubmit}  style={{ color: "rgb(30, 140, 230)", marginLeft: "400px", backgroundColor: "white", fontWeight: "bold", border: "1px solid white" }}
                                    >공유하기</button></div>
                                <div style={{ display: "flex" }}>
                                    <img src={fileURL} height={400} width={760} style={{ marginTop: "150px" }} />
                                    <div style={{ borderLeft: "1px solid rgb(200, 200, 200)", height: "745px", width: "350px" }}>
                                        <div style={{ height: "270px", borderBottom: "1px solid rgb(214, 216, 206)" }}>
                                            <img src="img/profile_image.jpg" width={30} style={{margin:"15px 15px"}} /><span style={{fontWeight:"bold"}}>{userName}</span>
                                            <textarea className="uploadTextArea" placeholder="문구 입력..." style={{display:"block",height:"170px",width:"340px",border:"none",fontSize:"16px",paddingLeft:"15px",fontWeight:"bold"}} 
                                            onChange={(e)=>setDescription(e.target.value)}></textarea>
                                        </div>
                                        <div style={{ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" }}>
                                            <input type="text" placeholder="위치 추가" style={{ padding: "8px 15px", fontSize: "16px" }}onChange={(e)=>setLocation(e.target.value)} />
                                        </div>
                                        <div style={accessibilitySize} >
                                            <div style={{ padding: "8px 15px", fontSize: "16px" ,cursor:"pointer"}} onClick={handleAccessibilitySize}>
                                                접근성
                                            </div>
                                            <div style={accessibilityToggle}>
                                                <div>대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며,
                                                    직접 입력할 수도 있습니다.</div>
                                                <div style={{ marginTop: "8px" }} >
                                                    <img src={fileURL} height={41} width={48}  />
                                                    <input type="text" placeholder="대체 텍스트 입력" style={{ padding: "20px 0 20px 20px", marginLeft: "10px", height: "1px", fontSize: "16px", border: "1px solid rgb(214, 216, 206)", 
                                                    borderRadius: "5px", width: "232px" }} onChange={(e)=>setReplacedText(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={advancedSettingSize}  >
                                            <div style={{ padding: "8px 15px", fontSize: "16px",cursor:"pointer" }} onClick={handleAdvancedSettingSize}>
                                                고급 설정
                                            </div>
                                            <div style={advancedSettingToggle}>
                                                <span>댓글 기능 해제</span>
                                                <Switch defaultChecked style={{marginLeft:"150px"}}onChange={(prev)=>setCommentOff(!prev)}/>
                                                <div style={{paddingTop:"10px",fontSize:"12px",color:"gray"}}>나중에 게시물 상단의 메뉴(...)에서 이 설정을 변경할 수 있습니다.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className='modal1' style={{ height: "45px", borderBottom: "1px solid rgb(200, 200, 200)", textAlign: "center", paddingTop: "10px", fontWeight: "550", fontSize: "16px" }}>
                                    새 게시물 만들기</div>
                                <Modal.Body>
                                    <div style={{ marginLeft: "280px", marginTop: "270px" }}><img src="img/upload_image.png" /></div>
                                    <div style={{ fontSize: "22px", textAlign: "center", fontWeight: "lighter", color: "rgb(71, 71, 71)" }}>사진과 동영상을 여기에 끌어다 놓으세요</div>
                                    <Button type="primary" style={{ marginLeft: "300px", marginTop: "15px" }} onClick={handleOpenFileUpload}>컴퓨터에서선택</Button>
                                    <input type="file" ref={fileUploadRef} onChange={handleUploadFile} style={{ display: "none" }} />
                                </Modal.Body>
                            </div>
                    }
                </div>
            </Modal>


        </div>
    )
}

//https://react-bootstrap.netlify.app/components/navbar
//https://react-icons.github.io/react-icons/search?q=heart
export default NavbarComponent

