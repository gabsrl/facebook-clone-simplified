import React from 'react';
import './Comment.css';
import man from '../../assets/man.jpg';
function Comment() {
    return (
        <div className="comment">
            <img src={man}/>
            <div className="comment-content">
                <span>Rodrigo Otávio</span>
                lorem impsum lorem lorem impsum lorem dolor sit amet
                impsum lorem dolor sit amet impsum lorem dolor sit amet
                impsum lorem dolor sit amet impsum lorem dolor sit amet
                lorem impsum lorem lorem impsum lorem dolor sit amet.
            </div>
        </div>
    );
}

export default Comment;
