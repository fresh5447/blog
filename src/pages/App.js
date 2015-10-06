import React from 'react'
import {connect} from 'react-redux'

import {load} from '../actions/BlogActions'

import BlogBox from '../components/BlogBox'

class App extends React.Component {


  componentWillMount() {
    const {dispatch} = this.props
    dispatch(load())
  }
  render() {
    const {state, dispatch} = this.props
    return (
      <BlogBox {...this.props}/>
    )
  }

}

function mapStateToProps(state){
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
