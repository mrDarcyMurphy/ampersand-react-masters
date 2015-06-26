'use strict'

import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'


const ReposPage = React.createClass({

  displayName: 'RepoDetailPage',

  mixins: [ampersandMixin],

  render () {
    const {repo} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p>Labels</p>
        <ul>
          {repo.labels.map((label) => {
            return (
              <div className='label'>
                <span className='label-color' style={{backgroundColor: label.cssColor}}>&nbsp;</span>
                <span>{label.name}</span>
                <span className='octicon octicon-pencil'></span>
                <span className='octicon octicon-x'></span>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
})

export default ReposPage
