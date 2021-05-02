import React, { useEffect } from "react"
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { useSelector, useDispatch } from 'react-redux'
import { getCommentsFromAPI } from '../../actions/postCommentActions'

const CommentSection = ({postId}) => {

    const dispatch = useDispatch();
    const comments = useSelector(state=>state.postComments.postComments[postId]);
    
    useEffect(()=>{

        dispatch(getCommentsFromAPI(postId));

    },[dispatch,postId]);

    return  <div className='mb-5'>

                <h1>Comments</h1>

                {comments ? <CommentList comments={comments}/> : <h5>No comments yet!</h5>}
                <CommentForm/>
            </div>
}

export default CommentSection;