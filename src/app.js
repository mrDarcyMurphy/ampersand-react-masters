'use strict'

import Router from './router'
import app from 'ampersand-app'
import Me from './models/me'

import style from './styles/main.styl'
import icons from 'octicons/octicons/octicons.css'


window.app = app

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchInitialData()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
