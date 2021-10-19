// here we contain global state
import { createStore } from "redux";
import rootReducer from "./reducers";



const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// для "консолинга"
window.store = store;


export default store