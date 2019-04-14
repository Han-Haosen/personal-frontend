import './posts.css';
import React from './node_modules/react';

class Posts extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          articleInfo:[{
              title:'test',
              excerpt:'test excerpt',
              author:'test author',
              submittedTime:'2019-01-03'
          }]
      }
  }

  

  render(){
      const articleTitles = () => {
          return (
              <div className="articleExcerpt">
                  {
                      this.state.articleInfo.forEach(element => {
                          <ArticleItem info={element}></ArticleItem>
                      })
                  }
              </div>
          )
      }
      return (
          <div className="posts">
              {articleTitles}
          </div>
      )
  }
}


export default Posts;