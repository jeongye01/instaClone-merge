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
import {useSelector} from 'react-redux'
import {RootState} from '../../../redux/_reducers'
import firebase from '../../../fbase'
import moment from 'moment'; //날짜 라이브러리

interface IProps {
    userName:string
}



function Post({userName}:IProps){
    const [posts, setPosts] = useState<Array<any>>([]);
    const [show, setShow] = useState(false);
    const [fileUrl , setFileUrl] = useState("");
    const [comment,setComment] = useState("")
    const [postId,setPostId] = useState("")
    const currentUser = useSelector((state:RootState) => state.user.currentUser)
    const [allComment,setAllComment] = useState<Array<any>>([]);
    const [showModalInPost,setShowModalInPost] = useState(false);
    const handleCloseModalInPost = () => setShowModalInPost(false);
    const handleShowModalInPost = () => setShowModalInPost(true);
    

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
                    return <div style={{ width: "290px", height: "300px",position:"relative",cursor:"pointer"}} onClick={openModal(post)}>
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

    const openModal = (post:any)=>(event:React.MouseEvent) =>{
        setShow(true)
        setFileUrl(post.fileUrl)
        setPostId(post.id)
        addCommentListeners(post.id)
    }


    //댓글작성
    const onSubmit = async(e:any)=>{
        e.preventDefault();
        try{
            await firestoreService.collection("comment").add(createMessage(postId))
            setComment("")
        }catch(err){
            console.log(err)
            setComment("")
        }
    }


    const createMessage = (postId:string)=> {
        const today = new Date()
        const yearMonthDay = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}` //메시지 전송 경과시간을위해
        const hourminutesecond = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`//메시지 전송 경과시간을위해
        const message = {
            timestamp: today,
            content:comment,
            yearMonthDay:yearMonthDay,
            hourminutesecond:hourminutesecond,
            postId:postId,
            writer:{
                id: currentUser.uid,
                name: currentUser.displayName
            }
        }
        return message
    }

    //timestamp 시간으로 댓글 가져오기
    //https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=ko#web-version-8
    const addCommentListeners = (postId: string) => {
        try {
            firestoreService.collection("comment").orderBy("timestamp").onSnapshot((snapshot) => {
                const commentArray = snapshot.docs.map(doc =>({
                     id: doc.id,
                  ...doc.data()
                }));
                setAllComment(commentArray)
             });
        } catch (err) {
            console.log(err)
        }
    }

    //게시물삭제
    const handleDeletePost =  async()=>{
        try{
            await firestoreService.collection("posts").doc(postId).delete()
            setShow(false)
            setPostId("")
            setFileUrl("")
        }catch(err){
            console.log(err)
            setShow(false)
            setPostId("")
            setFileUrl("")
        }
    }
    //https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=ko

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
                <div style={{ display: "flex",overflowY:"scroll" }}>
                    <div style={{ width: "920px", height: "920px", backgroundColor: "black" }}>
                        <img src={fileUrl} height={515} width={920} style={{ marginTop: "200px" }} />
                    </div>
                    <div style={{ width: "100%", height: "60px" }}>
                        <div style={{height:"60px" ,display: "flex", borderBottom: "1px solid rgb(230, 230, 230)",paddingBottom:"15px" }}>
                            <img src="img/profile_image.jpg" height={32} style={{ margin: "15px 0 0 17px" }} />
                            <div style={{ margin: "20px 0 0 13px" }}>{userName}</div>
                            <FiMoreHorizontal size={20} style={{ margin: "20px 0 0 360px",cursor:"pointer" }} onClick={handleShowModalInPost}/>
                        </div>
                        <div style={{ width: "100%", height: "685px", borderBottom: "1px solid rgb(230, 230, 230)",overflowY:"scroll" }}>
                            {
                                allComment.map(comment =>
                                    comment.postId === postId &&
                                    <div style={{ height: "60px", display: "flex", margin: "10px 0 10px 0" }}>
                                        <img src="img/profile_image.jpg" height={32} style={{ margin: "15px 0 0 17px" }} />
                                        <div style={{ margin: "10px 0 0 13px" }}>
                                            <div><span style={{ fontWeight: "bold" }}>{comment.writer.name}&nbsp;</span>{comment.content}</div>
                                            <span style={{color:"gray",fontSize:"12px"}}>{moment(`${comment.yearMonthDay} ${comment.hourminutesecond}`).fromNow()}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div style={{height: "90px",margin:"15px 0 0 0", borderBottom: "1px solid rgb(230, 230, 230)"}}>
                            <AiOutlineHeart className="heart" size={29} style={{marginRight:"15px",marginLeft:"15px"}}/>  
                            <MdOutlineChatBubbleOutline className="bubble" size={26} style={{marginRight:"15px"}}/>
                            <FaRegPaperPlane className="paper" size={22} style={{marginBottom:"5px"}}/>
                            <img className="save" style={{marginLeft:"336px"}}src="img/save.png"/>
                            <div style={{margin:"10px 0 0 16px"}}>가장 먼저 <span style={{fontWeight:"bold"}}>좋아요</span>를 눌러보세요</div>
                            <div style={{margin:"5px 0 0 16px", fontSize: "10px", color: "gray" }}>5일 전</div>
                        </div>
                        <div style={{ margin: "12px 0 0 16px",display: 'flex' }}>
                            <AiOutlineSmile  size={27} style={{marginRight:"13px"}}/>
                            <form onSubmit={onSubmit}>
                            <input type="text" placeholder="댓글 달기..." onChange={(e)=>{setComment(e.target.value)}} value = {comment}/>
                            <button style={{ color: "rgb(30, 140, 230)", marginLeft: "230px", backgroundColor: "white", fontWeight: "bold", border: "1px solid white" }}>게시</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Modal className="modal" show={showModalInPost} onHide={handleCloseModalInPost} style={{ marginTop: '310px', marginLeft: '760px', width: '400px' }}>
                    <div style={{ borderRadius: "35px" }}>
                        <div className='modal1' style={{
                            height: "47px", borderBottom: "1px solid rgb(220, 220, 220)",
                            textAlign: "center", paddingTop: "15px", cursor: "pointer", color: "red", fontWeight: "bold"
                        }}  onClick={handleDeletePost}>
                            삭제
                        </div>
                        <div className='modal2' style={{
                            height: "47px", borderBottom: "1px solid rgb(220, 220, 220)",
                            textAlign: "center", paddingTop: "15px", cursor: "pointer"
                        }}>
                            게시물로 이동
                        </div>
                        <div className='modal3' style={{
                            height: "47px", borderBottom: "1px solid rgb(220, 220, 220)",
                            textAlign: "center", paddingTop: "15px", cursor: "pointer"
                        }}>
                            공유 대상...
                        </div>
                        <div className='modal4' style={{
                            height: "47px", borderBottom: "1px solid rgb(220, 220, 220)",
                            textAlign: "center", paddingTop: "15px", cursor: "pointer"
                        }}>
                            링크 복사
                        </div>
                        <div className='modal5' style={{
                            height: "47px", borderBottom: "1px solid rgb(220, 220, 220)",
                            textAlign: "center", paddingTop: "15px", cursor: "pointer"
                        }}>
                            퍼가기
                        </div>
                        <div className='modal10' style={{
                            height: "45px", textAlign: "center", paddingTop: "10px",
                            cursor: "pointer"
                        }} onClick={handleCloseModalInPost}>
                            취소
                        </div>
                    </div>
                </Modal>
            </Modal>
        </div>
    )
}

export default Post

