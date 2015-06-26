'use strict'

import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import app from 'ampersand-app'

import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import RepoDetailPage from './pages/repo-detail'


export default Router.extend({

  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout me={app.me}>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
    'repo/:owner/:name': 'repoDetail'
  },

  public () {
    console.log('public')
    this.renderPage(<PublicPage />, {layout: false})
  },

  repos () {
    console.log('repos')
    this.renderPage(<ReposPage repos={app.me.repos} />, {layout: true})
  },

  repoDetail (owner, name) {
    const model = app.me.repos.getByFullName(owner + '/' + name)
    model.fetch()
    this.renderPage(<RepoDetailPage repo={model} labels={model.labels} />, {layout: true})
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '0a5b69d87d924d7c0566',
      redirect_url: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    })
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)
    xhr({
      url: 'https://gatekeeper-murphy.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      app.me.token = body.token
      this.redirectTo('/repos')
    })
  }

})
