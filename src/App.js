import { useState } from 'react';
import './App.css';

function App() {

  const [likes, setLikes] = useState([]);



  function addLike() {
    const numLikes = likes.length + 1;
    setLikes([...likes, numLikes]);
  }

  // function likesOutput() {
  //   if (numLikes === 0) {
  //     setLikes() = 'like';
  //   }

  // }
  function likeOrLikes() {
    if (likes.length === 1) {
      return (likes.length + " Like")
    } else {
      return (<span>{likes.length} Likes</span>)
    }
  }



  return (
    <div className="App">
      <button onClick={addLike} type="button"> {likeOrLikes()}</button>

    </div>
  );
}

export default App;
