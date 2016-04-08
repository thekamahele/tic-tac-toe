import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './styles/main.css'
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

const store = configureStore()

ReactDOM.render(
  <Root store={store} />
  , document.getElementById('app'));