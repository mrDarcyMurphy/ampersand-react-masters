'use strict'

import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({

  displayName: 'Label',

  mixins: [ampersandMixin],

  getInitialState () {
    const {name, color} = this.props.label
    return {name, color}
  },

  onChangeName (event) {
    this.setState({
      name: event.target.value
    })
  },

  onClickCancel (event) {
    event.preventDefault()
    this.props.label.editing = false
  },

  onClickDestroy (event) {
    event.preventDefault()
    this.props.label.destroy()
  },

  onClickEdit (event) {
    event.preventDefault()
    this.props.label.editing = true
  },

  render () {
    const {label} = this.props
    let content

    // editing
    if (label.editing) {
      content = (
        <form className='label'>
          <span className='label-color avatar avatar-small avatar-rounded' style={{backgroundColor: label.cssColor}}>&nbsp;</span>
          <input name='name' value={this.state.name} onChange={this.onChangeName} />
          <input name='color'/>
          <button type='submit' className='button button-small'>Save</button>
          <button type='button' className='button button-small button-unstyled' onClick={this.onClickCancel}>Cancel</button>
        </form>
      )
    } else {
      content = (
        <li className='label'>
          <span className='label-color' style={{backgroundColor: label.cssColor}}>&nbsp;</span>
          <span>{label.name}</span>
          <span className='octicon octicon-pencil' onClick={this.onClickEdit}></span>
          <span className='octicon octicon-x' onClick={this.onClickDestroy}></span>
        </li>
      )
    }

    return (
      <div>
        {content}
      </div>
    )
  }
})
