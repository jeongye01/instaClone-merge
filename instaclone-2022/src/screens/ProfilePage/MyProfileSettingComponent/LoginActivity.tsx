import React,{useState} from 'react'
import {GoLocation} from 'react-icons/go'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import  "./LoginActivity.css"
import { authService } from '../../../fbase'

function LoginActivity() {
    const [mapToggle,setMapToggle] = useState(true)


    const handleLogout = () => { //로그아웃
        authService.signOut()
    }
    

    return (
        <div style={{ width: "710px", height: "830px", border: "0.5px solid rgb(210, 210, 210)", borderLeft: "none" }}>
            <div style={{ margin: "30px 0 0 65px", fontSize: "22px", fontWeight: "lighter" }}>
                로그인 활동
            </div>
            <div style={{ margin: "20px 0 0 65px", fontSize: "16px", fontWeight: "600" }}>
                로그인한 위치
            </div>
            <div className="mapTab" style={{ margin: "20px 75px 0 65px", display: "flex", padding: "12px 0 0 0", cursor: "pointer" }} onClick={()=>{setMapToggle(!mapToggle)}}>
                <GoLocation size={22} />
                <div style={{ marginLeft: "14px", marginTop: "-10px", fontSize: "13px" }}>
                    <div>Seoul, Korea</div>
                    <div style={{ color: "rgb(135, 194, 108)", fontWeight: "bold" }}>지금 활동 중</div>
                </div>
                {
                    mapToggle ? <IoIosArrowDown size={35} style={{ marginLeft: "423px", color: "gray", paddingBottom: "10px" }} />
                        : <IoIosArrowUp size={35} style={{ marginLeft: "423px", color: "gray", paddingBottom: "10px" }} />
                }
            </div>
            <div style={{ margin: "0 75px 0 65px", borderBottom: "1px solid rgb(210, 210, 210)", paddingBottom: "12px" }}>
            </div>
            {
                mapToggle ? <div style={{ border: "1px soild red", margin: "0 75px 0 65px", height: "300px" }}>
                    <img src="img/map.png" />
                    <div style={{ border: "1px solid rgb(210, 210, 210)", borderTop: "none", textAlign: "center", cursor: "pointer", height: "55px", paddingTop: "15px" }}
                        onClick={handleLogout}>로그아웃</div>
                    <div style={{ margin: "20px 0 0 0", borderBottom: "1px solid rgb(210, 210, 210)" }}></div>
                </div> : null
            }
        </div>
    )
}

export default LoginActivity
