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
export const fetchPizzas = ({ type,order },category) => dispatch =>
    {
        dispatch(setLoaded(false))
        axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${type}&_order=${order}`) // идем за пиццами
        .then(({ data }) => {
            dispatch(setPizzas(data))
        }  )
        }       
    




// export const setCategory = catIndex => ({
//     type: "SET_SORT_BY",
//     payload: catIndex
// }
// )