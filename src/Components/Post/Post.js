import React from "react"
import PostContent from './PostContent'
import CommentSection from '../Comment/CommentSection'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import VoteBox from '../VoteBox'

const PostContext = React.createContext();

const Post = () => {

    const { id } = useParams();
    const posts = useSelector(state=>state.posts.posts);

    return  <div className='mt-5'>

                <PostContext.Provider value={{postId:id}} >
                    <VoteBox votes={posts[id].votes} postId={id} />
                    <PostContent post={posts[id]}/>
                    <CommentSection postId={id}/>
                </PostContext.Provider>

            </div>
}
export {PostContext};
export default Post;