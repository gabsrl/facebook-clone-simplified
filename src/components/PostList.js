import React, { Component } from 'react';
import './PostList.css'
import userImage from '../assets/rosa.jpg'
class PostList extends Component {
    render() {
        return(
            <div className="post">
                <div className="user-profile">
                    <img src={userImage} /> 
                    <div className="user-profile-info"> 
                        Rosa Souza <br />
                        <span>04 Jun 2019</span>                   
                    </div>
                </div>
                <div className="post-content">
                    conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla...
                    conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...conteúdo do post bla bla bla...
                    conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla... conteúdo do post bla bla bla...
                </div>
                <div>Comentário</div>
            </div>
        )
    }
}

export default PostList;