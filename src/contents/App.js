import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callMovies, callComingsoons } from '../actions';
import '../css/app.css'

import Main from '../components/Main';
import Tabs from '../components/Tabs';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      curMain: null
    }
    this.handleSelected=this.handleSelected.bind(this)
  }

  componentWillMount(){
    this.props.dispatch(callMovies());
    this.props.dispatch(callComingsoons());
  }

  componentDidMount(){

  }

  handleSelected(id, type){
    let selected;
    if(!this.props.state.loading){
      if(type === 'M'){
        selected = this.props.state.movies.filter(m => m._id === id)
      }else{
        selected = this.props.state.comingsoons.filter(c => c._id === id)
      }
    }
    this.setState({
      curMain: selected[0]
    })
  }

  render() {
    let loading = (
      <div className="loader">
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
      </div>
    );
    let content = (
      <div className="wrapper">
        <Tabs 
          movieList={this.props.state.movies} 
          comingsoonList={this.props.state.comingsoons}
          selected={this.handleSelected}
        />
        <Main 
          curMain={this.state.curMain}
        />
      </div>
    );

    return (
      <div className="App">
        {this.props.state.loading ? loading : content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps)(App);
