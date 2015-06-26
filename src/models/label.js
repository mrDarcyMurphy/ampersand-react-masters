'use strict'

import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

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
    }
  }

})
