import React, {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import { addPostWithAPI } from '../reducers/actions'
import { useHistory } from 'react-router-dom'
import { useEffect } from "react";

const PostForm = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const INITIAL_FORM_DATA = {
        title:'',
        description:'',
        body:'',
    };

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [formSubmitted, setFormSubmitted] = useState(false);

    console.log('formsubmitted: ', formSubmitted);

    useEffect(()=>{

        dispatch(addPostWithAPI(formData));
        setFormData(fd=>INITIAL_FORM_DATA);

        return ()=>{history.push('/')}
    },[dispatch,formSubmitted]);

    const handleChange = (evt) => {

        const {name,value} = evt.target;

        setFormData(data=>({
            ...data,
            [name]:value
        }));
    }
    const handleSubmit = (evt) => {

        evt.preventDefault();
        console.log("Form Submitted");
        
        // add post to reducer
        // isokay?
        setFormSubmitted(fs=>!fs);
        console.log("Form data!", formData);

        // clear form
        // history.push('/')
    }

    return  <div className='container mt-5'>

                <h1 className='text-left'>New Post</h1>
                <form onSubmit={handleSubmit} className='text-left'>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input value={formData.title} name='title' onChange={handleChange}type="text" className="form-control" id="title" aria-describedby="title" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input value={formData.description} name='description' onChange={handleChange}type="text" className="form-control" id="description" aria-describedby="description" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Body:</label>
                        <textarea value={formData.body} onChange={handleChange}className="form-control" name="body" id="body" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        <button type="submit" className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
}

export default PostForm;