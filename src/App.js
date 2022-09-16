import React from 'react';
import BlogPostForm from './components/BlogPostForm'
import Nav from './components/Nav'
import About from './components/About'
import FeedPost from './components/FeedPost'
import './index.css'


function App() {
  
  return (
    <div className="App">
      <section id="main">
        <Nav />
        <div className="mainContent">
          <About />
          <BlogPostForm />
          <section id="feed" className="feed">
            <h2>Feed</h2>
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </section>
        </div>
      </section>     
    </div>
  );
}

export default App;
