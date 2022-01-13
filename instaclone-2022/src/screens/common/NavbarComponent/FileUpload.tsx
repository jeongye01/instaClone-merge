import React , {useRef,useState,useEffect} from 'react'
import { Modal } from 'react-bootstrap'
import { authService } from '../../../fbase'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import 'bootstrap/js/dist/modal'; 
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { Button,Switch } from 'antd';
import {storageService,databaseService} from '../../../fbase';
import firebase from '../../../fbase'


interface IProps {
    showUploadModal:boolean;
    handleCloseUploadModal:()=>void
}

function FileUpload({showUploadModal,handleCloseUploadModal}: IProps ){
    const fileUploadRef = useRef<HTMLInputElement>(null);
    const [userUid,setUserUid] = useState("")
    const [userName,setUserName] = useState("")
    const [fileURL,setFileURL] = useState("")
    const [ModalSize , setModalSize] = useState({width: "760px",marginLeft:"580px"})
    const [accessibilitySize,setAccessibilitySize] = useState({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" })
    const [advancedSettingSize,setAdvancedSettingSize] = useState({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)"})
    const [accessibilityToggle ,setAccessibilityToggle] = useState({ display:"none" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray" })
    const [advancedSettingToggle,setAdvancedSettingToggle] = useState({ display:"none" ,fontSize:"16px",padding:"10px 15px 0px 15px"})
    const [acessibilityArrow,setAcessibilityArrow] = useState(true)
    const [advancedSettingArrow,setaAvancedSettingArrow] = useState(true)
    const [description,setDescription] = useState("")
    const [location,setLocation] = useState("")
    const [replacedText,setReplacedText] = useState("")
    const [commentOff,setCommentOff] = useState(false)
    const fileStorage = storageService.ref()
    const fileDatabase = databaseService.ref("fileUpload")
    const [fileType,setFileType] = useState("")


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


    const handleAccessibilitySize = () => {
        if(accessibilitySize.height==="45px"){
            setAccessibilitySize({ height: "190px", borderBottom: "1px solid rgb(214, 216, 206)"})
            setAccessibilityToggle({ display:"block" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray" })
            setAcessibilityArrow(false)
        }
        else{
            setAccessibilitySize({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" })
            setAccessibilityToggle({ display:"none" ,fontSize:"12px",padding:"0px 15px 0px 15px",color:"gray"  })
            setAcessibilityArrow(true)
        }      
    }
    const handleAdvancedSettingSize = () =>{
        if(advancedSettingSize.height==="45px"){
            setAdvancedSettingSize({ height: "200px", borderBottom: "0px solid rgb(214, 216, 206)"})
            setAdvancedSettingToggle({ display:"block" ,fontSize:"16px",padding:"10px 15px 0px 15px" })
            setaAvancedSettingArrow(false)
        }
        else{
            setAdvancedSettingSize({ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)"})
            setAdvancedSettingToggle({ display:"none" ,fontSize:"16px",padding:"10px 15px 0px 15px" })
            setaAvancedSettingArrow(true)
        }
    }

    const handleOpenFileUpload = () => {
        fileUploadRef.current && fileUploadRef.current.click()
    }
    const handleUploadFile = async (event: { target: HTMLInputElement }) => {
        if (event.target.files)
        {
            const file = event.target.files[0]
            const metadata = {contentType: file.type}

            setFileType(file.type)
            console.log(file.type)

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
            setFileType("")
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
            fileType:fileType,
            user: {
                id: userUid,
                name: userName
            }
        }
        return file
    }

    return (
        <div>
            <Modal size="xl" centered show={showUploadModal} onHide={handleCloseUploadModal} style={ModalSize}>
                <div style={{ height: '790px', borderRadius: '30px' }}>
                    {
                        fileURL ?
                            <div>
                                <div style={{ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)", paddingTop: "10px", fontWeight: "550", fontSize: "16px" }}>
                                    <HiOutlineArrowLeft size={25} style={{ marginLeft: "15px", cursor: "pointer" }} onClick={handleCloseUploadModal} />
                                    <span style={{ marginLeft: "440px", color: "rgb(53, 52, 52)" }}>새 게시물 만들기</span>
                                    <button onClick={handleSubmit} style={{ color: "rgb(30, 140, 230)", marginLeft: "380px", backgroundColor: "white", fontWeight: "bold", border: "1px solid white" }}
                                    >공유하기</button></div>
                                <div style={{ display: "flex" }}>
                                    {
                                        fileType === "video/mp4" ? <video src={fileURL} width={760} controls />
                                            : <img src={fileURL} height={400} width={760} style={{ marginTop: "150px" }} />
                                    }
                                    {/* <img src={fileURL} height={400} width={760} style={{ marginTop: "150px" }} /> */}
                                    <div style={{ borderLeft: "1px solid rgb(200, 200, 200)", height: "745px", width: "350px" }}>
                                        <div style={{ height: "270px", borderBottom: "1px solid rgb(214, 216, 206)" }}>
                                            <img src="img/profile_image.jpg" width={30} style={{ margin: "15px 15px" }} /><span style={{ fontWeight: "bold" }}>{userName}</span>
                                            <textarea className="uploadTextArea" placeholder="문구 입력..." style={{ display: "block", height: "170px", width: "340px", border: "none", fontSize: "16px", paddingLeft: "15px", fontWeight: "bold" }}
                                                onChange={(e) => setDescription(e.target.value)}></textarea>
                                        </div>
                                        <div style={{ height: "45px", borderBottom: "1px solid rgb(214, 216, 206)" }}>
                                            <input type="text" placeholder="위치 추가" style={{ padding: "8px 15px", fontSize: "16px" }} onChange={(e) => setLocation(e.target.value)} />
                                            <GoLocation style={{ marginLeft: "100px" }} />
                                        </div>
                                        <div style={accessibilitySize} >
                                            <div style={{ padding: "8px 14px", fontSize: "16px", cursor: "pointer" }} onClick={handleAccessibilitySize}>
                                                접근성 {acessibilityArrow ? <RiArrowDownSLine size={25} style={{ marginLeft: "232px" }} /> : <RiArrowUpSLine size={25} style={{ marginLeft: "232px" }} />}
                                            </div>
                                            <div style={accessibilityToggle}>
                                                <div>대체 텍스트는 시각적으로 사진을 보기 어려운 사람들에게 사진 내용을 설명하는 텍스트입니다. 대체 텍스트는 회원님의 사진에 대해 자동으로 생성되며,
                                                    직접 입력할 수도 있습니다.</div>
                                                <div style={{ marginTop: "8px" }} >
                                                    {
                                                        fileType === "video/mp4" ? <video src={fileURL} width={55} />
                                                            : <img src={fileURL} height={41} width={55} />
                                                    }
                                                    <input type="text" placeholder="대체 텍스트 입력" style={{
                                                        padding: "20px 0 20px 10px", marginLeft: "10px", height: "1px", fontSize: "16px", border: "1px solid rgb(214, 216, 206)",
                                                        borderRadius: "5px", width: "232px"
                                                    }} onChange={(e) => setReplacedText(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={advancedSettingSize}  >
                                            <div style={{ padding: "8px 15px", fontSize: "16px", cursor: "pointer" }} onClick={handleAdvancedSettingSize}>
                                                고급 설정{advancedSettingArrow ? <RiArrowDownSLine size={25} style={{ marginLeft: "215px" }} /> : <RiArrowUpSLine size={25} style={{ marginLeft: "215px" }} />}
                                            </div>
                                            <div style={advancedSettingToggle}>
                                                <span>댓글 기능 해제</span>
                                                <Switch defaultChecked style={{ marginLeft: "150px" }} onChange={(prev) => setCommentOff(!prev)} />
                                                <div style={{ paddingTop: "10px", fontSize: "12px", color: "gray" }}>나중에 게시물 상단의 메뉴(...)에서 이 설정을 변경할 수 있습니다.</div>
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

export default FileUpload
