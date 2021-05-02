import React from "react"
import { Route } from "react-router-dom"
import PostForm from './Post/PostForm'
import Post from './Post/Post'
import Home from './Home/Home'


const Router = () => {


    return  <div>
                <Route exact path='/blog'>
                    <Home/>
                </Route>
                <Route exact path='/new'>
                    <PostForm/>
                </Route>
                <Route exact path='/posts/:id/edit'>
                    <PostForm/>
                </Route>
                <Route exact path='/posts/:id'>
                    <Post/>
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </div>
}

export default Router;