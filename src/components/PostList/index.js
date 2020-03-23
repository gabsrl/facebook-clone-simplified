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
                    {
                        id: 21,
                        author: {
                            name: 'Iara Albuquerque',
                            avatar: 'https://images.unsplash.com/photo-1577619009286-028c59f79a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        },
                        content: 'Opa, vim de outros frameworks frontend e confesso que tô gostando muito do React hhaha.'
                    },
                ]
            },
            {
                id: 1,
                author: {
                    name: 'Gabriel Lima',
                    avatar: 'https://avatars3.githubusercontent.com/u/37541952?s=460&u=f9c11777df2fa3ce7bd8bbedae8144abe8dd3402&v=4',
                },
                date: '23 Mar 2020',
                content: 'Eae, pessoal!? Tudo bem com vocês? Só queria dizer que estou amando aprender React! Como está indo ai? Abraços! :)',
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