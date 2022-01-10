import { off } from 'process';
import React,{useRef,useState,useEffect} from 'react'
import { storageService, databaseService } from '../../fbase';
import { authService } from '../../fbase'



type UidProps = {
    uid: string;
  };

function Post({uid}:UidProps) : React.ReactElement {
    const fileDatabase = databaseService.ref("fileUpload")
    const [posts, setPosts] = useState([])
    const [userUid,setUserUid] = useState("")
    const [userName,setUserName] = useState("")


    useEffect(() => {
        if (uid) {
            addPostListeners(uid)
        }

    }, [])

    const addPostListeners = (uid:string) => {
        let postsData: any = []
        fileDatabase.child(uid).on("child_added", data => {
            postsData.push(data.val())
            setPosts(postsData)
        })
    }

    const rederPostCard = (posts:any[]) =>
        posts.map(post => 
            <div style={{width:"290px",height:"300px"}}><img src={post.fileUrl} width={290} height={300}/></div>
        )
        
    return (
        <div>
            {
                posts.length>0?
                    <div style={{ width: '930px', margin: 'auto', display: 'grid',gridTemplateColumns:'1fr 1fr 1fr',rowGap:'30px',columnGap:'30px'}} >
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
        </div>
    )
}

export default Post
