import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = () => {
    return (
        <div className="post">
            {/* header -> pic + username */}
            <div className="post__header">
                <Avatar className="post__avatar" alt="userName" src="https://images.unsplash.com/photo-1605020798729-c2486b2971b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">

                </Avatar>
                <h3>User124</h3>
            </div>
          

            {/* image */}
                <img className="post__image" src="https://images.unsplash.com/photo-1605286998753-040e16ab0c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt=""/>

            {/* username and caption */}
                <h4 className="post__text"><strong>User name</strong>caption</h4>
        </div>
    )
}

export default Post
