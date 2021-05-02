import React, {useEffect} from "react"
import PostPreviewCard from '../../Components/Post/PostPreviewCard'
import { v4 as uuidv4 } from 'uuid';
import chunk from 'lodash.chunk'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsFromAPI } from '../../actions/postActions'

const HomeBlogList = () => {

    const posts = useSelector(state=>state.posts.posts);
    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getPostsFromAPI());

    },[dispatch])

    const makeCards = () => {

        const cards = []

        for(let key of Object.keys(posts)){
            cards.push(<PostPreviewCard key={key} id={key} data={posts[key]} />)
        }        

        return chunk(cards,2);
    }

    const cards = makeCards();

    return  <div className='mt-4'>

                { cards ? cards.map(row => (
                    <div key={uuidv4()} className="row my-3 justify-content-left align-items-">

                            {row.map(post=><div className='col-6' key={uuidv4()}>{(post)}</div>)}
                        
                    </div>
                )) : <h2>No posts available.</h2>}

            </div>
}

export default HomeBlogList;