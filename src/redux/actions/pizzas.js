// setPizzas - actionCreator: возвращает action(объект, содержащий тип действия и preload)
export const setPizzas = items => ({
    type: "SET_PIZZAS",
    payload: items
}
)

// export const setCategory = catIndex => ({
//     type: "SET_SORT_BY",
//     payload: catIndex
// }
// )