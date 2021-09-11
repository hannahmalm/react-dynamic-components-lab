//your code here
import React, { Component } from 'react';


//You need to write export default calss or else youll get a warning
//commentText renders from blog post


export default class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}