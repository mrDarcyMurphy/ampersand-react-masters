'use strict'

import Model from 'ampersand-model'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {

  props: {
    // url: 'string',
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

  url () {
    return 'https://api.github.com/repos/' + this.parent.full_name + '/labels' + this.name
  }

})
