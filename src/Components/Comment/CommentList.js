import React from "react"
import Comment from './Comment'

const CommentList = ({comments}) => {

    return  <div className='mt-5'>
                {Object.keys(comments).map(key=>(<Comment key={key} commentId={key} comment={comments[key]}/>))}
            </div>
}

export default CommentList;