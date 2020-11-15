import './App.css';
import Post from './components/PostComponent/Post'
function App() {
  return (
    <div className="app">

      {/* header */}
      <div className="app__header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyhmvK81dnLxY5eVy1QpqtGTgpCtj7Gva6nw&usqp=CAU" alt="" className="app__headerImage"/>
      </div>
      <Post></Post>
      {/* //Posts */}


    </div>
  );
}

export default App;
