import React from 'react'
import { Checkbox } from 'antd'

function PersonalnformationSecurity() {
    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "30px 0 0 50px", fontSize: "24px", fontWeight: "500" }}>계정 공개 범위</div>
            <div style={{ margin: "18px 0 22px 50px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold", margin: "0 0 3px 3px" }}>의견 이메일</Checkbox>
                <div style={{ margin: "5px 50px 10px 0", borderBottom: "1px solid rgb(210, 210, 210)",paddingBottom:"25px" }}>계정이 비공개 상태인 경우 회원님이 승인한 사람만 Instagram에서 회원님의 사진과 동영상을 볼 수 있습니다.
                    기존 팔로워는 영향을 받지 않습니다.</div>
            </div>
            <div style={{ margin: "0 0 0 50px", fontSize: "24px", fontWeight: "500" }}>활동 상태</div>
            <div style={{ margin: "18px 0 22px 50px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold", margin: "0 0 3px 3px" }}>활동 상태 표시</Checkbox>
                <div style={{ margin: "5px 50px 10px 0", borderBottom: "1px solid rgb(210, 210, 210)",paddingBottom:"25px" }}>Instagram 앱에서 최근 활동한 시간 정보가 회원님이 팔로우하는 계정 및 메시지를 보낸 모든 사람에게 표시됩니다.
                    이 설정을 해제하면 다른 계정의 활동 상태를 볼 수 없습니다.</div>
            </div>
            <div style={{ margin: "0 0 0 50px", fontSize: "24px", fontWeight: "500" }}>스토리 공유</div>
            <div style={{ margin: "18px 0 22px 50px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold", margin: "0 0 3px 3px" }}>공유 허용</Checkbox>
                <div style={{ margin: "5px 50px 20px 0", borderBottom: "1px solid rgb(210, 210, 210)",paddingBottom:"25px" }}>사람들이 회원님의 스토리를 메시지로 공유할 수 있습니다</div>
            </div>
        </div>
    )
}

export default PersonalnformationSecurity
