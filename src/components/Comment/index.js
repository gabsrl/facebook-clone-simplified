import React from 'react';
import './Comment.css';
import man from '../../assets/man.jpg';
function Comment(props) {
    return (
        <div className="comment">
            <img src={props.author.avatar}/>
            <div className="comment-content">
                <span>{props.author.name}</span>
                {props.content}
            </div>
        </div>
    );
}

export default Comment;
