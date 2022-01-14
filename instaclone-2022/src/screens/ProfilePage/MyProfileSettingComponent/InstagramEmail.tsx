import React ,{useState}from 'react'

function InstagramEmail() {

    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "23px 65px 0px 65px", fontSize: "22px", fontWeight: "lighter" }}>
                Instagram에서 보낸 이메일
            </div>
            <div style={{ margin: "25px 75px 0px 65px", display: "flex", textAlign: "center" }}>
                {
                    currentTab === 0 ? <div onClick={() => { setCurrentTab(0) }} style={{
                        width: "50%", padding: "15px", fontWeight: "bold",
                        borderBottom: "1px solid black", fontSize: "16px", cursor: "pointer"
                    }}>보안</div>
                        : <div onClick={() => { setCurrentTab(0) }} style={{
                            width: "50%", padding: "15px", borderBottom: "1px solid rgb(210, 210, 210)",
                            fontSize: "16px", cursor: "pointer"
                        }}>보안</div>
                }
                {
                    currentTab === 1 ? <div onClick={() => { setCurrentTab(1) }} style={{
                        width: "50%", padding: "15px", fontWeight: "bold",
                        borderBottom: "1px solid black", fontSize: "16px", cursor: "pointer"
                    }}>기타</div>
                        : <div onClick={() => { setCurrentTab(1) }} style={{
                            width: "50%", padding: "15px", borderBottom: "1px solid rgb(210, 210, 210)",
                            fontSize: "16px", cursor: "pointer"
                        }}>기타</div>
                }
            </div>
            <div style={{ margin: "25px 75px 0px 65px", fontSize: "18px", color: "gray", paddingBottom: "25px" }}>
                {
                    currentTab === 0 ?
                        <div>
                            최근 14일 동안 Instagram에서 보낸 보안 및 로그인 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은 이메일이 실제
                            Instagram에서 보낸 것이 맞는지 확인할 수 있습니다.&nbsp;<a href="https://help.instagram.com/760602221058803"
                                style={{ color: "rgb(49, 66, 121)" }}>더 알아보기.</a>
                        </div>
                        : <div>
                            최근 14일 동안 Instagram에서 보낸 보안 및 로그인 외 다른 내용의 이메일이 여기에 표시됩니다. 이 리스트를 사용하여 회원님이 받은
                            이메일이 실제 Instagram에서 보낸 것이 맞는지 확인할 수 있습니다.&nbsp;<a href="https://help.instagram.com/760602221058803"
                                style={{ color: "rgb(49, 66, 121)" }}>더 알아보기.</a>
                        </div>
                }
            </div>
        </div>
    )
}

export default InstagramEmail
