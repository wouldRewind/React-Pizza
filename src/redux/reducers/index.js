import pizzas from "./pizzas";
import filters from "./filters";
import { combineReducers } from "redux";
import cart from "./cart"

const rootReducer = combineReducers({ // combineReducers -  объединяет редьюсеры в стейт
  filters,
  pizzas,
  cart
})

export default rootReducer