import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as Constant from './constant/var'
import registerServiceWorker from './registerServiceWorker'
import io from 'socket.io-client'
window.socket = io(Constant.ioUrlConnect)
// window.socket.on('connect', () => { console.log('--connect io') })

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
