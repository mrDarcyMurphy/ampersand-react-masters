'use strict'

import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import qs from 'qs'
import xhr from 'xhr'

export default Router.extend({

  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (<Layout>{page}</Layout>)
    }
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },

  public () {
    console.log('public')
    this.renderPage(<PublicPage />, {layout: false})
  },

  repos () {
    console.log('repos')
    this.renderPage(<ReposPage />, {layout: true})
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '0a5b69d87d924d7c0566',
      redirect_url: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)
    xhr({
      url: 'https://gatekeeper-murphy.herokuapp.com/authenticate/' + query.code
    }, (err, req, body) => {
      console.log(body)
    })
  }

})
