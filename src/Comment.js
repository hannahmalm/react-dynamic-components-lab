//your code here
import React, { Component } from 'react';


//You need to write export default calss or else youll get a warning
//commentText renders from blog post
//export the class so it can be used in other files
//It should expect a single prop (the text of a comment), which can be used in the component via: this.props.commentText
//This prop is passed in src/BlogPost.js - the comment text is passed into the blog post
//It should have a single <div> in its render() method
//The <div> should have a className="comment" attribute
//we can unpack variable values directly with JSX by wrapping them in {}, i.e. {this.props.commentText}


export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}