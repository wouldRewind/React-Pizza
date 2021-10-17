import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './scss/app.scss';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";



const inc = () => {
  store.dispatch({
    type: "counter/incremented"
  })
}

store.subscribe(() => console.log("The sotre has changed",store.getState()));

const dec = () => {
  store.dispatch({
    type: "counter/decremented"
  })
}


ReactDOM.render(
    <Router>
      <Provider store={store}>
        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
        <button>{store.value}3</button>
        <App />
      </Provider>
    </Router>,
  document.getElementById('root')
);
