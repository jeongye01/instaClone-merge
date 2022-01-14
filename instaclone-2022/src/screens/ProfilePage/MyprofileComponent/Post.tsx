//import { off } from 'process';
import React,{useState,useEffect} from 'react'
import { databaseService } from '../../../fbase';
import {useSelector} from 'react-redux'
import {RootState} from '../../../redux/_reducers'

function Post(){
    const user = useSelector((state:RootState) => state.user.currentUser)
    const fileDatabase = databaseService.ref("fileUpload")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        addPostListeners()
    }, [])

    const addPostListeners = async() => {
        let postsData: any = []
        await fileDatabase.child(user.uid).on("child_added", data => {
            postsData.push(data.val())
            console.log(postsData)
        })
        setPosts(postsData)
    }

    const rederPostCard = (posts: any[]) =>
        posts.map(post => {
            switch (post.fileType) {
                case "image/jpeg": {
                    return <div style={{ width: "290px", height: "300px" }}><img src={post.fileUrl} width={290} height={300} /></div>
                }
                case "video/mp4": {
                    return <div style={{ width: "290px", height: "300px", backgroundColor: "red" }}><video src={post.fileUrl} width={290} /></div>
                }
            }
        }
        )

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
        </div>
    )
}

export default Post

