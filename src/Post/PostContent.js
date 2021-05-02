import React, {useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
import { deletePostWithAPI } from "../reducers/actions"
import { useDispatch } from "react-redux"

const PostContent = ({post}) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDelete = () =>{

        dispatch(deletePostWithAPI(post.id));
        history.push('/');
    }

    return  <div className='text-left mt-5'>

                <div className="row justify-content-between">
                    <div className="col-6 mb-4">
                        <h1>{post.title}</h1>
                        <p className='font-italic'>{post.description}</p>
                    </div>
                    <div className="col-2 text-right">
                        <button onClick={handleDelete} className='btn text-primary'><FontAwesomeIcon icon={faEdit} /></button>
                        <button onClick={handleDelete} className='btn text-danger'><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                </div>
                <p>
                    {post.body}
                </p>
            </div>
}

export default PostContent;