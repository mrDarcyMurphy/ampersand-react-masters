'use strict'

import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import RepoPage from './pages/repo'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('public')
    React.render(<PublicPage />, document.body)
  },

  repos () {
    console.log('repos')
    React.render(<RepoPage />, document.body)
  }
})
