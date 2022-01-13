import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../../redux/_reducers'
import {Button} from 'antd'

function ChangePassword() {

    const user = useSelector((state:RootState) => state.user.currentUser)

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{margin:"30px 0 0 123px",display:"flex"}}><img src="img/mini_profile_image.jpg"/><div style={{fontSize:"22px",margin:"5px 0 0 26px"}}>{user.displayName}</div></div>
            <div style={{margin:"33px 0 0 62px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>이전 비밀번호</span> <input type="text" style={{width:"430px" ,padding:"6px 0 6px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"5px",backgroundColor:"rgb(250, 250, 250)"}}/></div>
            <div style={{margin:"20px 0 0 78px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>새 비밀번호</span> <input type="text" style={{width:"430px" ,padding:"6px 0 6px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"5px",backgroundColor:"rgb(250, 250, 250)"}}/></div>
            <div style={{margin:"20px 0 0 41px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>새 비밀번호 확인</span> <input type="text" style={{width:"430px" ,padding:"6px 0 6px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"5px",backgroundColor:"rgb(250, 250, 250)"}}/></div>
            <Button type="primary" style={{fontWeight:"bold",width:"110px",margin:"30px 0 0 197px",paddingLeft:"10px",borderRadius:"5px"}} size={"middle"}>비밀번호 변경</Button>
            <div style={{color:"rgb(41, 149, 238)",fontWeight:"bold",margin:"30px 0 0 196px"}}>비밀번호를 잊으셨나요?</div>
        </div>
    )
}

export default ChangePassword
