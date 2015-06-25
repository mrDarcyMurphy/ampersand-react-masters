// ES6
import React from 'react'
import styles from './styles/main.css'

const Hello = React.createClass({
  render () {
    return <div>Hello there, {this.props.name}.</div>
  }
})

React.render(<Hello name="Darcy" />, document.body)


// ES5
var React = require('react');

var Hello = React.createClass({
  render: function render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="Darcy" />, document.body)
