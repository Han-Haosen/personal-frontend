import './posts.scss';
import React from 'react';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleInfo: {
                title: 'test',
                excerpt: 'test excerpt',
                author: 'test author',
                submittedTime: '2019-01-03'
            }
        }
    }



    render() {
        return (
            <div className="article">
                <h1>{this.state.articleInfo.title}</h1>
                <h2>{this.state.articleInfo.author}</h2>
                <span>{this.state.articleInfo.submittedTime}</span>
                <p>{this.state.articleInfo.excerpt}</p>
            </div>
        )
    }
}


export default Posts;