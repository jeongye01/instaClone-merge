import React,{useState} from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import {Link} from 'react-router-dom'
import SecurityHelp from './SecurityHelp'

function Help() {
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "23px 65px 0px 65px", fontSize: "22px", fontWeight: "lighter", color: "gray" }}>
                Help
            </div>
            {
                currentTab === 0 ? <div><a href="https://help.instagram.com/">
                    <div style={{ margin: "35px 50px 0px 82px", fontSize: "16px", color: "black" }}>
                        고객 센터<IoIosArrowForward style={{ marginLeft: "450px" }} size={20} />
                    </div>
                </a>
                    <div style={{ margin: "20px 50px 0px 82px", fontSize: "16px", cursor: "pointer" }} onClick={() => { setCurrentTab(1) }}>
                        개인정보 및 보안 도움말<IoIosArrowForward style={{ marginLeft: "343px" }} size={20} />
                    </div>
                    <div style={{ margin: "20px 50px 0px 82px", fontSize: "16px", cursor: "pointer" }} onClick={() => { setCurrentTab(2) }}>
                        지원 요청<IoIosArrowForward style={{ marginLeft: "450px" }} size={20} />
                    </div></div> : <SecurityHelp setCurrentTab={() => { setCurrentTab(0) }}/>
            }
        </div>
    )
}

export default Help
