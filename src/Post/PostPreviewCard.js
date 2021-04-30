import React from "react"
import { Link } from "react-router-dom"

const PostPreviewCard = ({data, id}) => {

    return  <div className='card text-left p-3'>

                <Link to={`/post/${id}`}><h5>{data.title}</h5></Link>
                <p className='font-italic'>{data.description.length>66 ? data.description.slice(0,66)+'...' : data.description}</p>

            </div>
}

export default PostPreviewCard;