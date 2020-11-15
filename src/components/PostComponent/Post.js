import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = ({userName,caption,imageUrl}) => {
    return (
        <div className="post">
            {/* header -> pic + username */}
            <div className="post__header">
                <Avatar className="post__avatar" alt={userName} src="">

                </Avatar>
                <h3>{userName}</h3>
            </div>
          

            {/* image */}
                <img className="post__image" src={imageUrl} alt=""/>

            {/* username and caption */}
    <h4 className="post__text"><strong>{userName}</strong>{caption}</h4>
        </div>
    )
}

export default Post
