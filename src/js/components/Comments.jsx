import React from "react";

export default class Comments extends React.Component{

    render(){
        return(
            <div className="comment">
                <p className="commentHeader">{this.props.author}</p>
                <p className="commentText">{this.props.bodyText}</p>
                <div className="commentAction">
                    <a href="#">Delete comment</a>
                </div>
            </div>
        );
    }
}