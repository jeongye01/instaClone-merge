import React from 'react'
import {Button} from 'antd'

function ContactManagement() {
    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ fontSize: "24px", margin: "25px 0 0 65px" }}>연락처 관리</div>
            <div style={{ fontSize: "16px", margin: "20px 66px 0 65px" }}>Instagram에 업로드한 연락처 리스트입니다. 동기화된 연락처를 삭제하려면 모두 삭제를 누르세요.
                기기 설정으로 이동하여 연락처에 대한 액세스 권한을 해제하지 않는 한 다음번에 Instagram이 연락처를 동기화할 때 연락처가 다시 업로드됩니다.</div>
            <div style={{ fontSize: "16px", margin: "20px 66px 0 65px" }}>업로드한 연락처 정보는 Instagram이 회원님에게 친구를 추천하거나 이용 환경을 개선하는 데 사용됩니다.
                이 연락처 정보는 회원님만 볼 수 있습니다.</div>
            <div style={{ fontSize: "16px", margin: "60px 66px 0 65px",fontWeight:"bold",borderBottom:"1px solid rgb(210, 210, 210)",paddingBottom:"10px"}}>동기화된 연락처 0개</div> 
            <div style={{ fontSize: "16px", margin: "35px 66px 0 65px",fontWeight:"bold",borderBottom:"1px solid rgb(210, 210, 210)",paddingBottom:"35px"}}>Instagram에 연락처를 
            업로드하면  여기에 표시됩니다.</div>   
            <Button type="primary" style={{fontWeight:"bold",width:"82px",height:"33px",margin:"20px 0 0 65px",paddingLeft:"10px",borderRadius:"3px"}} size={"middle"}>모두 삭제</Button>
        </div>
    )
}

export default ContactManagement
