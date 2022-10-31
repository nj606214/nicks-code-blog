import React from 'react'
import BlogPostForm from './BlogPostForm'
import Nav from './Nav'
import Feed from './Feed'

export default function HomePage() {
    return (
        <div>
            <Nav />
            <section id="main">
                
                <div className="mainContent">
                    <BlogPostForm />
                    <section id="feed" className="feed">
                        <h2>Feed</h2>
                        <Feed />
                    </section>
                </div>
        </section> 
      </div>
    )
}