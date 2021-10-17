import pizzasReducer from "./pizzas";
import filtersReducers from "./filters";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filtersReducers,
  pizzas: pizzasReducer
})

export default rootReducer