import Model from 'ampersand-model'

export default Model.extend({
  props: {
    id: 'number',
    login: 'string',
    avatarUrl: 'string'
  },

  session: {
    token: 'string'
  },

  initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  onTokenChange () {
    window.localStorage.token = this.token
  }
})
