import styles from './css/style.css'
import React from 'react'
import { Provider } from 'react-redux'


import App from './pages/App'

import configureStore from './stores'

const store = configureStore()

const targetEl = document.body

React.render( (
  <Provider store={store}>
    {() => <App />}
  </Provider>
), targetEl )
