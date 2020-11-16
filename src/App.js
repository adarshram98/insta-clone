import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./components/PostComponent/Post";
import firebase from "./Fire";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button,Input } from "@material-ui/core";

function getModalStyle() {
  //middle of the page
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const auth = firebase.auth();
  //state
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [password, setPassword] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');

  useEffect(()=>{
    //listen to change- user has logged in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //user has logged in
      if(authUser){
        console.log(authUser)
        setUser(authUser)
        if (authUser.displayName)
        {
          //don't update user name

        }
        else{
          // if we just created someone
          return authUser.updateProfile({
            displayName:userName
          })
        }
      }
      //user has logged out
      else{
        setUser(null)
      }
    })
    return () => {
      unsubscribe()
      //cleanup
    }
  },[user,userName])
  //useEffect - ruun a piece of code on some condition
  useEffect(() => {
    //runs every time page loads and everytime posts is updated
    //every time posts id updated snapshot is created
    firebase
      .firestore()
      .collection("posts")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  const signUp = (event) => {
    // not to refresh
    event.preventDefault();
    auth.
    createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
     return authUser.user.updateProfile({
        displayName=userName
      })
    })
    .catch((error)=>alert(error.message))

  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU"
              alt=""
              className="app__headerImage"
            />
            <form action="" className="app__signup">
             <Input
        type = "text"
        placeholder="UserName"
        value={userName}
        onChange={(e)=> setUsername(e.target.value)}
        >
        </Input>
        
        <Input
        type = "text"
        placeholder="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        >
        </Input>
        <Input
        type = "password"
        placeholder="password"
        value={[password]}
        onChange={(e)=> setPassword(e.target.value)}
        >
        </Input>
          
          <Button onClick={(e) => signUp}>Sign Up</Button>
          
          </form>
        </div>
      </Modal>

      {/* header */}
      <div className="app__header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU"
          alt=""
          className="app__headerImage"
        />
       
      </div>
      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      {/* Iterating through posts state and rendering posts dynamically */}
      {posts.map(({ id, post }) => (
        // key prevents re rendering, identifies the change
        <Post
          key={id}
          userName={post.userName}
          caption={post.caption}
          imageUrl={post.imageUrl}
        ></Post>
      ))}
    </div>
  );
}

export default App;
