import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/_reducers'
import {Button} from 'antd'


function EditProfile() {

    const user = useSelector((state:RootState) => state.user.currentUser)

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{margin:"30px 0 0 123px",display:"flex"}}><img src="img/mini_profile_image.jpg"/><div style={{margin:"0 0 0 27px"}}><div style={{fontSize:"17px"}}>{user.displayName}</div><div style={{fontWeight:"bold",marginTop:"-3px" ,color:"rgb(41, 149, 238)"}}>프로필 사진 바꾸기</div></div></div>
            <div style={{margin:"20px 0 0 132px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>이름</span><input type="text" placeholder='정석우' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"13px 160px 10px 195px" , fontSize:"12px",color:"gray"}}>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</div>
            <div style={{margin:"0 160px 20px 195px" , fontSize:"12px",color:"gray"}}>이름은 14일 안에 두 번만 변경할 수 있습니다.</div>
            <div style={{margin:"20px 0 0 79px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>사용자 이름</span> <input type="text" placeholder='정석우' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"13px 160px 10px 195px" , fontSize:"12px",color:"gray"}}>대부분의 경우 14일 이내에 사용자 이름을 다시 dltpwjd1(으)로 변경할 수 있습니다.<a href="https://help.instagram.com/876876079327341" style={{color:"rgb(41, 149, 238)" , marginLeft:"3px" , fontWeight:"bold"}}>더 알아보기</a></div>
            <div style={{margin:"30px 0 0 101px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>웹사이트</span><input type="text" placeholder='웹사이트' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"19px 0 0 133px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>소개</span><textarea style={{width:"355px",height:"60px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"30px 0 0 197px" , fontSize:"14px",fontWeight:"bold",color:"gray"}}>개인정보</div>
            <div style={{margin:"0 150px 10px 197px" , fontSize:"12px",color:"gray"}}>비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.</div>
            <div style={{margin:"15px 0 0 118px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>이메일</span><input type="text" placeholder='이메일' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"20px 0 0 103px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>전화번호</span><input type="text" placeholder='전화번호' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <div style={{margin:"20px 0 0 135px",display:"flex",fontSize:"16px"}}><span style={{fontWeight:"bold"}}>성별</span><input type="text" placeholder='성별' style={{width:"343px" ,padding:"3px 0 3px 10px" , margin:"-3px 0 0 32px" , border: "1px solid rgb(200, 200, 200)" , borderRadius:"3px"}}/></div>
            <Button type="primary" style={{fontWeight:"bold",width:"50px" , paddingLeft:"10px",margin:"100px 0 0 201px"}} size={"middle"}>제출</Button>
        </div>
    )
}

export default EditProfile
