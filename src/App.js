import React,{ Component } from 'react';
import './App.css';

import Header from './components/Header/index';
import PostList from './components/PostList/index';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div id="main-content">
                    <PostList />
                </div>
            </>
        );
    }
}
export default App;