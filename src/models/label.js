'use strict'

import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'
import xhr from 'xhr'
import app from 'ampersand-app'

export default Model.extend(githubMixin, {

  idAttribute: 'name',

  props: {
    name: 'string',
    color: 'string'
  },

  derived: {
    cssColor: {
      deps: ['color'],
      fn () {
        return '#' + this.color
      }
    }
  },

  session: {
    editing: {
      type: 'boolean',
      default: false
    },
    saved: {
      type: 'boolean',
      default: true
    }
  },

  isNew () {
    return !this.saved
  },

  update (attributes) {
    const oldAttributes = this.attributes
    xhr({
      url: this.url(),
      json: attributes,
      method: 'PATCH',
      headers: {
        Authorization: 'token ' + app.me.token
      }
    }, (err, req, body) => {
      if (err) {
        this.set(oldAttributes)
        console.error('Whoops.')
      }
    })
    this.set(attributes)
  }

})
