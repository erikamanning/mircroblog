import React from "react"
import {useDispatch} from "react-redux"
import { voteOnPostWithAPI } from "../actions/postActions";

const VoteBox = ({votes,postId}) => {

    const dispatch = useDispatch();

    const castVote = (direction) =>{
        dispatch(voteOnPostWithAPI(postId,direction));
    }

    return  <div>
                <h3>{votes}</h3>
                <button onClick={()=>castVote('down')} className='btn btn-danger'>-</button>
                <button onClick={()=>castVote('up')} className='btn btn-primary'>+</button>
            </div>
}

export default VoteBox;