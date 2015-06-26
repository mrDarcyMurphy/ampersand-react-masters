'use strict'

import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Label from '../components/label'

const ReposPage = React.createClass({

  displayName: 'RepoDetailPage',

  mixins: [ampersandMixin],

  onClickAdd (event) {
    event.preventDefault()
    this.props.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0})
  },

  render () {
    const {repo, labels} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p>
          <button onClick={this.onClickAdd} className="button">Add Label</button>
        </p>
        <ul>
          {labels.map((label) => {
            return <Label key={label.name} label={label} />
          })}
        </ul>
      </div>
    )
  }
})

export default ReposPage
