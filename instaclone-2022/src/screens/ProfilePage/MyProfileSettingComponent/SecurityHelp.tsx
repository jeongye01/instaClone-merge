import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

interface IProps {
    setCurrentTab:()=>void
}


function SecurityHelp({setCurrentTab}:IProps) {
    return (
        <div>
            <div style={{ margin: "22px 65px 0px 60px", fontSize: "16px", color: "black", borderBottom: "1px solid rgb(210, 210, 210)", paddingBottom: "6px" }}>
                <IoIosArrowBack style={{ marginLeft: "10px",cursor:"pointer" }} onClick={setCurrentTab} size={30}/><span style={{ marginLeft: "173px", fontSize: "14px", fontWeight: "bold" }}>개인정보 및 보안 도움말</span>
            </div>
            <div style={{margin: "15px 65px 0px 60px", borderBottom: "1px solid rgb(210, 210, 210)",height:"200px",fontSize:"16px"}}>
                <div style={{paddingBottom:"17px",marginLeft:"20px",fontWeight:"bold"}}>계정 관리</div>
                <a href="https://help.instagram.com/517920941588885"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>연령 제한</div></a>
                <a href="https://help.instagram.com/116024195217477"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>계정 공개 범위</div></a>
                <a href="https://help.instagram.com/488619974671134"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>위치 공유</div></a>
                <a href="https://help.instagram.com/566810106808145"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>2단계 인증</div></a>
            </div>
            <div style={{margin: "15px 65px 0px 60px", height:"200px",fontSize:"16px"}}>
                <div style={{paddingBottom:"17px",marginLeft:"20px",fontWeight:"bold"}}>내 Instagram 환경 설정</div>
                <a href="https://help.instagram.com/517920941588885"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>계정 차단</div></a>
                <a href="https://help.instagram.com/116024195217477"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>팔로워 삭제</div></a>
                <a href="https://help.instagram.com/488619974671134"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>내가 나온 사진 관리</div></a>
                <a href="https://help.instagram.com/566810106808145"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>댓글 필터링</div></a>
                <a href="https://help.instagram.com/517920941588885"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>댓글 기능 해제</div></a>
                <a href="https://help.instagram.com/116024195217477"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>댓글 삭제</div></a>
                <a href="https://help.instagram.com/488619974671134"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>내 스토리를 볼 수 있는 사람 선택</div></a>
                <a href="https://help.instagram.com/566810106808145"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>내 스토리에 답장을 보내도록 허용할 사람 선택</div></a>
                <a href="https://help.instagram.com/488619974671134"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>마음에 들지 않는 콘텐츠 신고</div></a>
                <a href="https://help.instagram.com/566810106808145"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>댓글 신고</div></a>
                <a href="https://help.instagram.com/566810106808145"><div style={{paddingBottom:"17px",marginLeft:"20px",color:"black"}}>계정 또는 게시물 신고</div></a>
            </div>
        </div>
    )
}

export default SecurityHelp
