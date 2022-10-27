import React, { useEffect } from 'react'
import FeedPost from './FeedPost'

//make a fetch request to our database that pulls all of the post objects
//then loop over each post objects, assigning the object property to their corresponding elements
//in the component








export default function Feed() {

    const [blogPosts, setBlogPosts] = React.useState(null)


    //create a useEffect that fetches all of the blog posts and returns an
    //array of blog objects
    useEffect(() => {
        //make a fetch request to the api
        fetch("http://localhost:8000/")
        //then take the response from that promise, and make it json
        .then(response => response.json())
        //then take the data that exists in the response.json, and setFeedPosts
        .then(data => setBlogPosts(data))
    }, [])

    //loop over the array of blog posts, taking each post, and 
    //returning a post element

    //need to use the .map method
    //the && operator basically says, if blogPosts isnt empty, then run the map function and return that
   const feedPosts = blogPosts && blogPosts.map(blogPost => {
        return (
           <FeedPost 
                title={blogPost.title}
                text={blogPost.text}
                flaire={blogPost.flaire}
            />
        )
    })


    return (
        <div>
            <div>{feedPosts}</div>


        </div>
    )
}