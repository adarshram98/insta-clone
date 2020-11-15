import './App.css';
import React, { useState } from 'react';
import Post from './components/PostComponent/Post'
function App() {

  //state

  const [posts,setPosts] = useState([
    {userName:"user123",
     caption:"Wow props",
     imageUrl:"https://images.unsplash.com/photo-1605290975464-72d2acef7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ])
  return (
    <div className="app">

      {/* header */}
      <div className="app__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU" alt="" className="app__headerImage"/>
      </div>

      {/* Iterating through posts state and rendering posts dynamically */}
      {
        posts.map( post =>
          <Post userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
          ></Post>
        )
      }
      


    </div>
  );
}

export default App;
