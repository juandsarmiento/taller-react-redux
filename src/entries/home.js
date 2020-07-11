import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home";
// import Playlist from './src/playlist/components/playlist';
// import data from '../api.json';
// console.log('Hola mundo!' )
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reducer from "../reducers/data";
// import data from "../schemas/index";
import reducer from "../reducers/index";
import thunk from 'redux-thunk';
import { Map as map } from "immutable";

function logger({ dispatch, getState }) {
  return (next) => {
    return (action) => {
      console.log("test middleware", action);
      const value = next(action);
      console.log("new state", getState().toJS());
      return value;
    };
  };
}

const store = createStore(
  reducer,
  map({}),
  applyMiddleware(thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const homeContainer = document.getElementById("home-container");

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  homeContainer
);
