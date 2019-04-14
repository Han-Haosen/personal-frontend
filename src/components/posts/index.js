import './posts.css';
import React from 'react';
import { PropTypes } from 'prop-types';

class posts extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          articleTitles:['test'],
          articleExcerpts:['test excerpt']
      }
  }

  render(){
      return (
          <div></div>
      )
  }
}


export default posts;