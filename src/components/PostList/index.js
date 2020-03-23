import React, { Component } from 'react';
import './PostList.css'
import Post from '../Post';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'Rosa Souza',
                    avatar: 'https://images.unsplash.com/flagged/photo-1557898246-9fd78587bcc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                },
                date: '23 Mar 2020',
                content: 'Eae, pessoal!? Tudo bem com vocês? Só queria dizer que estou amando aprender React! Como está indo ai? Abraços! :)',
                comments: [
                    {
                        id: 21,
                        author: {
                            name: 'Rodrigo Otávio',
                            avatar: 'https://images.unsplash.com/photo-1571677449274-8d9ad8441442?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        },
                        content: 'Oi, Rosa! Eu estou gostando muito! Os hooks são muito interessantes!'
                    },
                ]
            },
        ]
    }

    render() {
        const { posts } = this.state;
        return(
            posts.map(item => (
                <Post 
                    author={item.author}
                    date={item.date}
                    content={item.content}
                    comments={item.comments} 
                />
            ))
        );
    }
}

export default PostList;