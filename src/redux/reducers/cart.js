import produce from "immer"


const initialState = {
    items: {

    },
    totalPrice: 0,
    totalCount: 0
}


const cart = (state = initialState,action) => {
    switch (action.type) {
        case "SET_TOTAL_PRICE":
            return {
            ...state,
            totalPrice: action.payload
        }
        case "SET_TOTAL_COUNT":
            return {
            ...state,
            totalCount: action.payload
        }  
        case "CLEAR_CART":
            return initialState
        case "ON_PIZZA_DECREASE":
            return produce(state,draft => {


                draft.totalPrice -= draft.items[action.payload][0].price
                draft.items[action.payload].pop()
                draft.totalCount--
                if(!draft.items[action.payload].length)
                    delete draft.items[action.payload]

                //action.payload == айди пиццы
            })
            case "ON_PIZZA_INCREASE":
                return produce(state,draft => {
    
                    const newPizza = draft.items[action.payload][0]
                    draft.totalPrice += newPizza.price
                    draft.totalCount++
                    draft.items[action.payload].push(newPizza)
    
                    //action.payload == айди пиццы
                })
        case "REMOVE_CART_ITEM": {
            return produce(state, draft => {
                const pizzasById = state.items[action.payload]

                draft.totalCount -= pizzasById.length
                draft.totalPrice -= pizzasById.length * pizzasById[0].price;
                delete draft.items[action.payload]
                // action.payload === id пиццы
            })
        }
        case "ADD_PIZZA_CART": { 

            const newItems = {
                ...state.items,
                [action.payload.id] : !state.items[action.payload.id] ? [action.payload] : 
                [...state.items[action.payload.id],action.payload],
            }
            const allPizzasArray = [].concat(...Object.values(newItems))
            const totalCount = allPizzasArray.length
            const totalPrice = allPizzasArray.reduce((total, { price }) => total + price, 0)

            const newState = produce(state, draft => {
                draft.totalCount = allPizzasArray.length
                draft.totalPrice = state.totalPrice + action.payload.price
                draft.items = newItems
            })

            return newState
        }    
        default:
            return state
    }
    return state
}

export default cart