'use strict'

import React from 'react'

export default React.createClass({

  displayName: 'Label',

  render () {
    const {label} = this.props
    return (
      <li className='label'>
        <span className='label-color' style={{backgroundColor: label.cssColor}}>&nbsp;</span>
        <span>{label.name}</span>
        <span className='octicon octicon-pencil'></span>
        <span className='octicon octicon-x'></span>
      </li>
    )
  }
})
