import React, {useEffect} from "react"
import PostPreviewCard from '../Post/PostPreviewCard'
import { v4 as uuidv4 } from 'uuid';
import chunk from 'lodash.chunk'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsFromAPI } from '../reducers/actions'

const HomeBlogList = () => {

    const posts = useSelector(state=>state.posts);
    const dispatch = useDispatch();

    console.log("Home blog list posts: ", posts);

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

    // console.log("Posts: ", posts);

    return  <div className='mt-4'>

                { cards ? cards.map(row => (
                    <div key={uuidv4()} className="row my-3 justify-content-left align-items-">

                            {row.map(post=><div className='col-6' key={uuidv4()}>{(post)}</div>)}
                        
                    </div>
                )) : <h2>No posts available.</h2>}

            </div>
}

export default HomeBlogList;