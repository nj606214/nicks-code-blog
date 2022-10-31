import React from 'react'
import Nav from './Nav'

export default function About() {
    return (
        <div>
            <Nav />
            <div className="about">
                <p className="aboutBlurb">Hello, and welcome to Nick's Code Blog! I built this website as a place to share anything to do with coding. 
                As a new developer, I am constantly learning new things, taking notes, and looking back on the things I've learned,
                so I figured what better way to do so than by making my notes public, and creating a platform where people can share,
                collaborate, communicate, and grow together! For now, I will be the only one making posts, but in the future
                I plan on adding a user login system, a comments box, up and downvote buttons, and other features to help establish a community!
                Check out the feed to see our latest posts and notes!</p>
            </div>
        </div>
    )
}