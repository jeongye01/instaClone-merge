//import { off } from 'process';
import React,{useState,useEffect} from 'react'
import {firestoreService} from '../../../fbase';
import "./Post.css"
import { Modal } from 'react-bootstrap'
import {FaRegPaperPlane} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineChatBubbleOutline} from 'react-icons/md'
import {AiOutlineSmile} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'

interface IProps {
    userName:string
}



function Post({userName}:IProps){
    const [posts, setPosts] = useState<Array<any>>([]);
    const [show, setShow] = useState(false);
    const [fileUrl , setFileUrl] = useState("");
    

    useEffect(() => {
        addPostListeners()
    }, [])

    const addPostListeners = () => {
        try {
            firestoreService.collection("posts").onSnapshot((snapshot)=>{
                const postArray=snapshot.docs.map(doc=>({
                  id:doc.id,
                  ...doc.data()
                }));
                setPosts(postArray);
             });
        } catch (err) {
            console.log(err)
        }
    }

    const rederPostCard = (posts: any[]) =>
        posts.map(post => {
            switch (post.fileType) {
                case "image/jpeg": {
                    return <div style={{ width: "290px", height: "300px",position:"relative",cursor:"pointer"}} onClick={openModal(post.fileUrl)}>
                        <div className="imgOverLay"></div>
                        <img src={post.fileUrl} width={290} height={300} />
                    </div>
                }
                case "video/mp4": {
                    return <div style={{ width: "290px", height: "300px",position:"relative",cursor:"pointer"}}>
                        <div className="videoOverLay"></div>
                        <video src={post.fileUrl} width={290} height={300} />
                        </div>
                }
            }
        }
        )

    const openModal = (fileUrl:string)=>(event:React.MouseEvent) =>{
        setShow(true)
        setFileUrl(fileUrl)
    }

    return (
        <div>
            {
                posts.length>0 ?
                    <div style={{ width: '930px', margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', rowGap: '30px', columnGap: '30px' }} >
                        {rederPostCard(posts)}
                    </div>
                    :
                    <div>
                        <div style={{ marginLeft: '490px' }}>
                            <img src="img/uploadDefault.jpg" height={370} width={379} />
                        </div>
                        <div style={{ width: '560px', backgroundColor: 'white' }}>
                        </div>
                    </div>
            }
            <Modal
                fullscreen={true}
                style={{ width: "1420px", height: "920px", margin: "25px 0 0 250px",borderRadius: "3px" }}
                size="xl"
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <div style={{ display: "flex" }}>
                    <div style={{ width: "920px", height: "920px", backgroundColor: "black" }}>
                        <img src={fileUrl} height={515} width={920} style={{ marginTop: "200px" }} />
                    </div>
                    <div style={{ width: "100%", height: "60px" }}>
                        <div style={{height:"60px" ,display: "flex", borderBottom: "1px solid rgb(230, 230, 230)",paddingBottom:"15px" }}>
                            <img src="img/profile_image.jpg" height={32} style={{ margin: "15px 0 0 17px" }} />
                            <div style={{ margin: "20px 0 0 13px" }}>{userName}</div>
                            <FiMoreHorizontal size={20} style={{ margin: "20px 0 0 360px" }} />
                        </div>
                        <div style={{ width: "100%", height: "697px", borderBottom: "1px solid rgb(230, 230, 230)" }}>
                            123
                        </div>
                        <div style={{height: "100px",margin:"15px 0 0 0", borderBottom: "1px solid rgb(230, 230, 230)"}}>
                            <AiOutlineHeart size={29} style={{marginRight:"15px",marginLeft:"15px"}}/>  
                            <MdOutlineChatBubbleOutline size={26} style={{marginRight:"15px"}}/>
                            <FaRegPaperPlane size={22} style={{marginBottom:"5px"}}/>
                            <img style={{marginLeft:"336px"}}src="img/save.png"/>
                            <div style={{margin:"10px 0 0 16px"}}>가장 먼저 <span style={{fontWeight:"bold"}}>좋아요</span>를 눌러보세요</div>
                            <div style={{margin:"5px 0 0 16px", fontSize: "10px", color: "gray" }}>5일 전</div>
                        </div>
                        <div style={{ margin: "12px 0 0 16px" }}>
                            <AiOutlineSmile  size={27} style={{marginRight:"13px"}}/>
                            <input type="text" placeholder="댓글 달기..." />
                            <button style={{ color: "rgb(30, 140, 230)", marginLeft: "230px", backgroundColor: "white", fontWeight: "bold", border: "1px solid white" }}>게시</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Post

{/* <Modal.Header closeButton>
<Modal.Title id="example-custom-modal-styling-title">
    Custom Modal Styling
</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>
    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
    ipsam atque a dolores quisquam quisquam adipisci possimus
    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
    deleniti rem!
</p>
</Modal.Body> */}