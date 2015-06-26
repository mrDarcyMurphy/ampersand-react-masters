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
        <p></p>
        <ul></ul>
      </div>
    )
  }
})

export default ReposPage
