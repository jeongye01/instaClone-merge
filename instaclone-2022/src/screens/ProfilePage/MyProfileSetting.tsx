import React,{useState} from 'react'
import NavbarComponent from '../common/Navbar'
import EditProfile from './MyProfileSettingComponent/EditProfile'
import ChangePassword from './MyProfileSettingComponent/ChangePassword'
import AppWeb from './MyProfileSettingComponent/AppWeb'
import EmailSms from './MyProfileSettingComponent/EmailSms'
import PushAlarm from './MyProfileSettingComponent/PushAlarm'
import ContactManagement from './MyProfileSettingComponent/ContactManagement'
import Personalnformationsecurity from './MyProfileSettingComponent/PersonalnformationSecurity'

function Myprofilesetting() {

    const [currentTab,setCurrentTabe] = useState(0)
    return (
        <div>
            <NavbarComponent />
            <div style={{ margin: "30px 0 0 490px", display: "flex", backgroundColor: "white" }}>
                <div><div style={{ width: "230px", height: "650px", border: "0.5px solid rgb(210, 210, 210)" }}><div style={{ borderRadius: "35px" }}>
                    {
                        currentTab === 0?<div className='setting_btn1' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(0)}}>프로필 편집</div>
                        :<div className='setting_btn1' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(0)}}>프로필 편집</div>
                    }
                    {
                        currentTab === 1?<div className='setting_btn2' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(1)}}>비밀번호 변경</div>
                        : <div className='setting_btn2' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(1)}}>비밀번호 변경</div>
                    }
                    {
                        currentTab === 2?<div className='setting_btn3' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(2)}}>앱 및 웹사이트</div>
                        :<div className='setting_btn3' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(2)}}>앱 및 웹사이트</div>
                    }
                    {
                        currentTab === 3?<div className='setting_btn4' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(3)}}>이메일 및 SMS</div>
                        :<div className='setting_btn4' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(3)}}>이메일 및 SMS</div>
                    }
                    {
                        currentTab === 4?<div className='setting_btn5' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(4)}}>푸시 알림</div>
                        :<div className='setting_btn5' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(4)}}>푸시 알림</div>
                    }
                    {
                        currentTab === 5?<div className='setting_btn6' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(5)}}>연락처 관리</div>
                        :<div className='setting_btn6' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(5)}}>연락처 관리</div>
                    }
                    {
                        currentTab === 6?<div className='setting_btn7' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(6)}}>개인정보 및 보안</div>
                        :<div className='setting_btn7' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(6)}}>개인정보 및 보안</div>
                    }
                    {
                        currentTab === 7?<div className='setting_btn8' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(7)}}>로그인 활동</div>
                        :<div className='setting_btn8' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(7)}}>로그인 활동</div>
                    }
                    {
                        currentTab === 8?<div className='setting_btn9' style={{ height: "72px", fontSize: "16px", padding: "15px 5px 20px 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(8)}}>Instagram에서 보낸 이메일</div>
                        :<div className='setting_btn9' style={{ height: "72px", fontSize: "16px", padding: "15px 5px 20px 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(8)}}>Instagram에서 보낸 이메일</div>
                    }
                    {
                        currentTab === 9?<div className='setting_btn10' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer",borderLeft:"2px solid black" }} onClick={()=>{setCurrentTabe(9)}}>도움말</div>
                        :<div className='setting_btn10' style={{ height: "52px", fontSize: "16px", padding: "15px 0 0 30px", cursor: "pointer" }} onClick={()=>{setCurrentTabe(9)}}>도움말</div>
                    }               
                </div></div>
                    <div style={{ width: "230px", height: "180px", border: "0.5px solid rgb(210, 210, 210)", borderTop: "none", padding: "20px 0 0 30px" }}>
                        <div style={{ fontSize: "15px", fontWeight: "550" }}><img src="img/meta.png" style={{ marginLeft: "-2px" }} />Meta</div>
                        <div style={{ fontSize: "15px", margin: "5px 0 7px 0", color: "rgb(41, 149, 238)", fontWeight: "bold" }}>계정 센터</div>
                        <div style={{ fontSize: "11px", color: "gray", marginRight: "20px" }}>스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger 간에 연결된 환경에 대한 설정을 관리하세요.</div>
                    </div>
                </div>
                {
                    currentTab === 0 ? <EditProfile /> :
                        currentTab === 1 ? <ChangePassword /> :
                            currentTab === 2 ? <AppWeb /> :
                                currentTab === 3 ? <EmailSms /> :
                                    currentTab === 4 ? <PushAlarm /> :
                                        currentTab === 5 ? <ContactManagement /> :
                                            <Personalnformationsecurity />
                }
            </div>
        </div>
    )
}

export default Myprofilesetting 
