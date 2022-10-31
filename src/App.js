import React from 'react';
import BlogPostForm from './components/BlogPostForm'
import Nav from './components/Nav'
import About from './components/About'
import Feed from './components/Feed'
import './index.css'
import SignInPage from './components/SignInPage'


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
            <Feed />
          </section>
        </div>
      </section> 
      <SignInPage />    
    </div>
  );
}

export default App;
