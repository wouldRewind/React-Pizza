// here we contain global state
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // Redux-devtools-extension

// MiddleWare - удобные штуки

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

// для "консолинга"
window.store = store;


export default store