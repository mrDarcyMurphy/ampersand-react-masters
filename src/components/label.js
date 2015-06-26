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

  onChangeColor (event) {
    this.setState({
      color: event.target.value.slice(1)
    })
  },

  onChangeName (event) {
    this.setState({
      name: event.target.value
    })
  },

  onClickCancel (event) {
    event.preventDefault()
    const {label} = this.props
    if (label.saved) {
      label.editing = false
      this.setState(this.getInitialState())
    } else {
      label.destroy()
    }
  },

  onClickDestroy (event) {
    event.preventDefault()
    this.props.label.destroy()
  },

  onClickEdit (event) {
    event.preventDefault()
    this.props.label.editing = true
  },

  onSubmit (event) {
    event.preventDefault()
    const {label} = this.props
    if (label.saved) {
      label.update(this.state)
    } else {
      label.save(this.state, {
        success: () => {
          label.saved = true
        }
      })
    }
    label.editing = false
  },

  render () {
    const {label} = this.props
    const {color} = this.state
    const cssColor = '#' + color

    let content

    // editing
    if (label.editing) {
      content = (
        <form className='label' onSubmit={this.onSubmit}>
          <span className='label-color avatar avatar-small avatar-rounded' style={{backgroundColor: cssColor}}>&nbsp;</span>
          <input name='name' value={this.state.name} onChange={this.onChangeName} />
          <input name='color' value={cssColor} onChange={this.onChangeColor} />
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
