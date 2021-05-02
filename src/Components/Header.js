import React from "react"
import { Link } from "react-router-dom"

const Header = () => {


    return <div className='border p-5 bg-light text-left'>

            <Link to='/'><h1 className='display-3 mt-5'>Microblog</h1></Link>
            <p className='lead'>Get in the Rithm of blogging!</p>

            <div className='row'>
                <div className="col-1">
                    <Link to='/blog'>Blog</Link>
                </div>
                <div className="col-2">
                    <Link to='/new'>Add a new post</Link>
                </div>
            </div>

    </div>
}

export default Header;