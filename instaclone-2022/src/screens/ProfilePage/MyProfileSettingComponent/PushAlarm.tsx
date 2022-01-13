import React from 'react'
import { Radio } from 'antd';

function PushAlarm() {
    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "25px 25px 0 25px",height:"160px" , borderBottom:"1px solid rgb(210, 210, 210)"}}>
                <div style={{  fontSize: "22px", fontWeight: "lighter" }}>좋아요</div>
                <Radio.Group name="radiogroup" defaultValue={1} style={{ margin: "20px 0 0 5px", fontWeight: "bold" }}>
                    <div><Radio value={1}>해제</Radio></div>
                    <div><Radio value={2}>내가 팔로우 하는 사람</Radio></div>
                    <div><Radio value={3}>모든 사람</Radio></div>
                </Radio.Group>
            </div>
            <div style={{ margin: "25px 25px 0 25px",height:"160px" , borderBottom:"1px solid rgb(210, 210, 210)"}}>
                <div style={{  fontSize: "22px", fontWeight: "lighter" }}>좋아요</div>
                <Radio.Group name="radiogroup" defaultValue={1} style={{ margin: "20px 0 0 5px", fontWeight: "bold" }}>
                    <div><Radio value={1}>댓글</Radio></div>
                    <div><Radio value={2}>내가 팔로우 하는 사람</Radio></div>
                    <div><Radio value={3}>모든 사람</Radio></div>
                </Radio.Group>
            </div>
            <div style={{ margin: "25px 25px 0 25px",height:"160px" , borderBottom:"1px solid rgb(210, 210, 210)"}}>
                <div style={{  fontSize: "22px", fontWeight: "lighter" }}>댓글 좋아요</div>
                <Radio.Group name="radiogroup" defaultValue={1} style={{ margin: "20px 0 0 5px", fontWeight: "bold" }}>
                    <div><Radio value={1}>해제</Radio></div>
                    <div><Radio value={2}>내가 팔로우 하는 사람</Radio></div>
                </Radio.Group>
            </div>
        </div>
    )
}

export default PushAlarm
