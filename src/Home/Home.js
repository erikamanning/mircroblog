import React from "react"
import HomeBlogList from "./HomeBlogList"

const Home = () => {


    return <div className='mt-4 text-left'>
            <p>Welcome to <span className='font-weight-bold'>Microblog</span>, our innovative sight for communicating on the information superhighway.</p>
            <HomeBlogList/>
    </div>
}

export default Home;