import React, { Component } from 'react';
import List from './List';

class Tabs extends Component {
    constructor(props){
      super(props)
      this.state = {
          isMovies : true
      }
    }
  
    render() {
      return (
        <div className="Tabs">
         <div>

         </div>
          <List isMovies={this.state.isMovies}/>
        </div>
      );
    }
  }

export default Tabs;