import Router from './router'
import style from './styles/main.styl'

window.app = {
  init () {
    this.router = new Router()
    this.router.history.start()
  }
}

window.app.init()
