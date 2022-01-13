import React from 'react'
import "antd/dist/antd.css";

function Footer() {
    return (
        <div style={{
            height: '119px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem' ,
            backgroundColor:"rgb(250, 250, 250)"
        }}>
            <p>© 2021 Instagram from Meta</p>
        </div>
    )
}

export default Footer
