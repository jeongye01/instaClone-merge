import React,{useState} from 'react'

function AppWeb() {

    const [currentTab,setCurrentTab] = useState(0)

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ fontSize: "28px", color: "gray", margin: "60px 0 0 70px" }}>앱 및 웹사이트</div>
            <div style={{ display: "flex", margin: "35px 40px 0 75px", fontSize: "16px" }}>
                {
                    currentTab === 0 ? <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid black", paddingBottom: "17px", cursor: "pointer", fontWeight: "bold" }} onClick={() => { setCurrentTab(0) }}>활성</div>
                        : <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid rgb(210, 210, 210)", paddingBottom: "17px", cursor: "pointer", color: "rgb(190, 190, 190)" }} onClick={() => { setCurrentTab(0) }}>활성</div>
                }
                {
                    currentTab === 1 ? <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid black", paddingBottom: "17px", cursor: "pointer", fontWeight: "bold" }} onClick={() => { setCurrentTab(1) }}>만료됨</div>
                        : <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid rgb(210, 210, 210)", paddingBottom: "17px", cursor: "pointer", color: "rgb(190, 190, 190)" }} onClick={() => { setCurrentTab(1) }}>만료됨</div>
                }
                {
                    currentTab === 2 ? <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid black", paddingBottom: "17px", cursor: "pointer", fontWeight: "bold" }} onClick={() => { setCurrentTab(2) }}>삭제됨</div>
                        : <div style={{ flexGrow: 1, textAlign: "center", borderBottom: "1px solid rgb(210, 210, 210)", paddingBottom: "17px", cursor: "pointer", color: "rgb(190, 190, 190)" }} onClick={() => { setCurrentTab(2) }}>삭제됨</div>
                }
            </div>
            {
                currentTab === 0 ? <div style={{ margin: "30px 30px 0 75px", fontSize: "16px" }}>
                    <div>Instagram을 사용하여 로그인하고 최근에 사용했으며, 회원님이 공유하기로 선택한 정보를 요청할 수 있는 앱과 웹사이트입니다.</div>
                    <div style={{ color: "gray", marginTop: "20px" }}>Instagram 계정에 액세스하도록 허용한 앱이 없습니다.</div>
                </div> : currentTab === 1 ? <div style={{ margin: "30px 30px 0 75px", fontSize: "16px" }}>
                    <div>회원님이 Instagram을 사용하여 로그인하고 한동안 사용하지 않은 앱과 웹사이트입니다. 이 앱과 웹사이트는 아직 회원님이 이전에 공유한 정보를 가지고 있을 수 있지만,
                        추가로 개인정보를 요청할 수는 없습니다. 앱에 회원님의 정보 삭제를 요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처
                        정보를 검토하세요. 앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.</div>
                    <div style={{ color: "gray", marginTop: "20px" }}>Instagram 계정에 대한 액세스 권한을 보유한 앱 중 만료된 앱이 없습니다.</div>
                </div>
                    : <div style={{ margin: "30px 30px 0 75px", fontSize: "16px" }}>
                        <div>회원님이 계정에서 삭제한 앱과 웹사이트입니다. 이 앱과 웹사이트는 아직 회원님이 이전에 공유한 정보를 가지고 있을 수 있지만, 추가로 정보를 요청할 수는 없습니다.
                            앱에 회원님의 정보 삭제를 요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처 정보를 검토하세요.
                            앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.</div>
                        <div style={{ color: "gray", marginTop: "20px" }}>Instagram 계정에 대한 액세스 권한을 보유한 앱 중 삭제된 앱이 없습니다.</div>
                    </div>
            }
        </div>
    )
}

export default AppWeb
