

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
        case "ADD_PIZZA_CART": { 

            const newItems = {
                ...state.items,
                [action.payload.id] : !state.items[action.payload.id] ? [action.payload] : 
                [...state.items[action.payload.id],action.payload],
            }
            const allPizzasArray = [].concat(...Object.values(newItems))
            const totalCount = allPizzasArray.length
            const totalPrice = allPizzasArray.reduce((total, { price }) => total + price, 0)

            return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice: state.totalPrice + action.payload.price
            }
        }    
        default:
            return state
    }
    return state
}

export default cart