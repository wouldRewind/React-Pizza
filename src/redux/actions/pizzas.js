// setPizzas - actionCreator: возвращает action(объект, содержащий тип действия и preload)

import axios from "axios";

export const setLoaded = payload => ({
    type: "SET_LOADED",
    payload
})

export const setPizzas = items => ({
    type: "SET_PIZZAS",
    payload: items
}
)


//Если параметр экшена функция - redux-thunk вызовет ее и запихнет туда диспач и гет стейт (под капотом)
export const fetchPizzas = () => dispatch =>
    {
        dispatch(setLoaded(false))
        axios.get("http://localhost:3001/pizzas") // идем за пиццами
        .then(({ data }) => {
            dispatch(setPizzas(data))
        }  )
        }       
    




// export const setCategory = catIndex => ({
//     type: "SET_SORT_BY",
//     payload: catIndex
// }
// )