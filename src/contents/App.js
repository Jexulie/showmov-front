import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchComingsoons } from '../actions';

import Main from '../components/Main';
import Tabs from '../components/Tabs';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movieList : [],
      comingsoonList : []
    }
  }

  componentWillMount(){
    this.props.dispatch(fetchMovies());
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <Main/>
        <Tabs/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps)(App);
