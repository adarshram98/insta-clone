import './App.css';
import React, { useState,useEffect } from 'react';
import Post from './components/PostComponent/Post';
import firebase from './Fire'
function App() {

  //state

  const [posts,setPosts] = useState([
    {userName:"user123",
     caption:"Wow props",
     imageUrl:"https://images.unsplash.com/photo-1605290975464-72d2acef7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ])

  //useEffect - ruun a piece of code on some condition
  useEffect(()=>{
    //runs every time page loads and everytime posts is updated
    //every time posts id updated snapshot is created
    firebase.firestore().collection('posts').onSnapshot(snapshot=>{
      setPosts(snapshot.docs.map(doc =>({
        id:doc.id,
        post: doc.data()
      })))
    })

  },[])
  return (
    <div className="app">

      {/* header */}
      <div className="app__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU" alt="" className="app__headerImage"/>
      </div>

      {/* Iterating through posts state and rendering posts dynamically */}
      {
        posts.map( ({id,post}) =>
        // key prevents re rendering, identifies the change
          <Post key={id} userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
          ></Post>
        )
      }
      


    </div>
  );
}

export default App;
