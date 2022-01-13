import React from 'react'
import { Checkbox } from 'antd';

function EmailSms() {
    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "18px 0 0 65px", fontSize: "22px", fontWeight: "lighter" }}>받아보기:</div>
            <div style={{ margin: "18px 0 22px 68px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold"}}>의견 이메일</Checkbox>
                <div style={{ marginTop: "1px" }}>Instagram에서 의견을 보내보세요.</div>
            </div>
            <div style={{ margin: "18px 0 22px 68px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold"}}>알림 이메일</Checkbox>
                <div style={{ marginTop: "1px" }}>확인하지 않은 알림을 받아보세요.</div>
            </div>
            <div style={{ margin: "18px 0 22px 68px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold" }}>제품 이메일</Checkbox>
                <div style={{ marginTop: "1px" }}>Instagram 도구에 관한 팁을 확인해보세요.</div>
            </div>
            <div style={{ margin: "18px 0 22px 68px", fontSize: "14px", fontWeight: "lighter", color: "gray" }}>
                <Checkbox style={{ fontWeight: "bold"}}>뉴스 이메일</Checkbox>
                <div style={{ marginTop: "1px" }}>Instagram의 새로운 기능에 대해 자세히 알아보세요.</div>
            </div>
        </div>
    )
}

export default EmailSms
