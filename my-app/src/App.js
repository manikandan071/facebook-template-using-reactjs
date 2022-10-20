import Bio from './components/bio/bio.js'
import Post from './components/post/post.js'
import Friends from './components/friends/friends.js'
import Header from './components/header/header.js'

import './App.css';

function App() {
  return (
  <div style={{background:"#f0f2f5"}}>
    <Header />
    <Bio />
    <Post />
    <Friends />
  </div>
  );
}

export default App;