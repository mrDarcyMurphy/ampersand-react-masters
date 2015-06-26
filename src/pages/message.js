'use strict'

import React from 'react'

const MessagePage = React.createClass({
  render () {
    const {title, message} = this.props
    return (
      <header role='banner'>
        <h1>{title}</h1>
        <p>{message}</p>
      </header>
    )
  }
})

export default MessagePage
