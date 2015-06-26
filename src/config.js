const config = {
  'localhost': {
    authUrl: 'https://gatekeeper-murphy.herokuapp.com/authenticate',
    clientId: '0a5b69d87d924d7c0566'
  },

  'flubble.surge.sh': {
    authUrl: 'https://gatekeeper-flubble.herokuapp.com/authenticate',
    clientId: '233fd4c8b36b1c9ed0d0'
  }
}[window.location.hostname]

console.log(config)

export default config
