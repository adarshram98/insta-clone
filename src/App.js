import './App.css';
import Post from './components/PostComponent/Post'
function App() {
  return (
    <div className="app">

      {/* header */}
      <div className="app__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU" alt="" className="app__headerImage"/>
      </div>
      <Post userName="user123" caption="Wow props"imageUrl="https://images.unsplash.com/photo-1605290975464-72d2acef7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></Post>
      <Post></Post>
      {/* //Posts */}


    </div>
  );
}

export default App;
