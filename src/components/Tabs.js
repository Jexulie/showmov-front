import React, { Component } from 'react';
import List from './List';

class Tabs extends Component {
    constructor(props){
      super(props)
      this.state = {
          isMovies : true
      }
      this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange(selection){
      if(selection === 'M'){
        this.setState({isMovies: true})
      }else{
        this.setState({isMovies: false})
      }
    }
  
    render() {
      return (
        <div className="Tabs">
         <div className="Buttons">
          <button 
            className={this.state.isMovies ? "waves-effect waves-light btn black sbtn1" : "waves-effect waves-light btn amber darken-1 sbtn2"} 
            onClick={() => this.handleTabChange('M')}>
            Current Movies
          </button>
          <button 
            className={this.state.isMovies ? "waves-effect waves-light btn amber darken-1 sbtn2" : "waves-effect btn waves-light black sbtn1"}  
            onClick={() => this.handleTabChange('C')}>
            Coming Soon
          </button>
         </div>
          <List 
            isMovies={this.state.isMovies} 
            movieList={this.props.movieList} 
            comingsoonList={this.props.comingsoonList}
            selected={this.props.selected}
          />
        </div>
      );
    }
  }

export default Tabs;