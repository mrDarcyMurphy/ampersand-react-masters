import React from 'react'
import styles from './styles/main.css'

const Hello = React.createClass({
  render () {
    return <div>Hello there, {this.props.name}. What's up?</div>
  }
})

React.render(<Hello name="Darcy" />, document.body)
