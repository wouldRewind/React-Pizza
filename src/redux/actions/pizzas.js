const setPizzas = items => ({
    type: "SET_PIZZAS",
    payload: items
}
)

const setCategory = catIndex => ({
    type: "SET_SORT_BY",
    payload: catIndex
}
)