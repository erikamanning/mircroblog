import React from "react"
import { Link } from "react-router-dom"
import VoteBox from '../VoteBox'

const PostPreviewCard = ({data, id}) => {


    return  <div className='card text-left p-3'>

                <Link to={`/posts/${id}`}><h5>{data.title}</h5></Link>
                <p className='font-italic'>{data.description.length>66 ? data.description.slice(0,66)+'...' : data.description}</p>

                <VoteBox votes={data.votes} postId={id} />

            </div>
}

export default PostPreviewCard;