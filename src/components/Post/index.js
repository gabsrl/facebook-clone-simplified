import React from 'react';
import './Post.css';
import userImage from '../../assets/rosa.jpg'
import Comment from '../Comment';


function Post(props) {
    return (
        <div className="post">
            <div className="user-profile">
                <img src={props.author.avatar} />
                <div className="user-profile-info">
                    {props.author.name} <br/>
                    <span>{props.date}</span>
                </div>
            </div>
            <div className="post-content">
                {props.content}              
            </div>
            <br/>
            {
                props.comments ?
                props.comments.map(item => (
                    <Comment author={item.author} content={item.content} />
                )) : null
            }           
        </div>
    );
}

export default Post;