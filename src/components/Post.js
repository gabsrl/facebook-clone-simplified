import React from 'react';
import './Post.css';
import userImage from '../assets/rosa.jpg'
import Comment from './Comment';


function Post() {
    return (
        <div className="post">
            <div className="user-profile">
                <img src={userImage} />
                <div className="user-profile-info">
                    Rosa Souza <br/>
                    <span>04 Jun 2019</span>
                </div>
            </div>
            <div className="post-content">
                conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla...
                conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...
                conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla...
            </div>
            <br/>
            <Comment />
            <Comment />
        </div>
    );
}

export default Post;