import React, {useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { deleteCommentWithAPI } from '../../actions/postCommentActions'
import { useDispatch } from 'react-redux'
import { PostContext } from '../Post/Post'

const Comment = ({commentId, comment}) => {

    const dispatch = useDispatch();
    const {postId} = useContext(PostContext);

    const removeComment = () => {

        dispatch(deleteCommentWithAPI(postId, commentId));
    }

    return  <div className='card mt-2 text-left p-3'>
                <div>
                    <button onClick={removeComment} className='btn text-danger'><FontAwesomeIcon icon={faTimes} /></button>
                    {comment.text}
                </div>
            </div>
}

export default Comment;