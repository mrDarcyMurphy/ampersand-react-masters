'use strict'

import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import xhr from 'xhr'
import app from 'ampersand-app'
import config from './config'

import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import RepoDetailPage from './pages/repo-detail'
import MessagePage from './pages/message'


function requiresAuth (route) {
  return function authHandler () {
    if (app.me.token) {
      this[route].apply(this, arguments)
    } else {
      this.redirectTo('/')
    }
  }
}

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
    'login': 'login',
    'logout': 'logout',
    'auth/callback?:query': 'authCallback',
    'repos': requiresAuth('repos'),
    'repo/:owner/:name': requiresAuth('repoDetail'),
    '*fourOhFour': 'notFound'
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
    this.renderPage(<RepoDetailPage repo={model} labels={model.labels} />, {layout: true})
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: config.clientId,
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
      url: config.authUrl + '/' + query.code,
      json: true
    }, (err, req, body) => {
      if (err) {
        console.error(err)
      }
      app.me.token = body.token
      this.redirectTo('/repos')
    })
    this.renderPage(<MessagePage title="Fetching your data" />)
  },

  notFound (path) {
    this.renderPage(<MessagePage title="Huh..." message="Couldn't find what you were looking for." />, {layout: false})
  }

})
