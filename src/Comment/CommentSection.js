import React from "react"
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import { v4 as uuidv4 } from 'uuid';

const CommentSection = ({comments}) => {


    return  <div className='mb-5'>

                <h1>Comments</h1>

                {comments ? <CommentList comments={comments}/> : <h5>No comments yet!</h5>}
                <CommentForm/>
            </div>
}

export default CommentSection;