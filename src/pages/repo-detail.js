'use strict'

import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Label from '../components/label'

const ReposPage = React.createClass({

  displayName: 'RepoDetailPage',

  mixins: [ampersandMixin],

  render () {
    const {repo, labels} = this.props
    return (
      <div className='container'>
        <h1>{repo.full_name}</h1>
        <p>Labels</p>
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
