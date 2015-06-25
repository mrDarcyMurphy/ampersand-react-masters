'use strict'

import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'

export default Router.extend({

  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (<Layout>{page}</Layout>)
    }
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    console.log('public')
    this.renderPage(<PublicPage />, {layout: false})
  },

  repos () {
    console.log('repos')
    this.renderPage(<ReposPage />, {layout: true})
  }
})
