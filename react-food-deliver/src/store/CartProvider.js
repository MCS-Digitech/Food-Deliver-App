import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
    items: [],
    totalAmount: 0
}

const CartProvider = props => {

    const formater = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency:'IDR'
    })
    const cartReducer = (state, action) => {
        if( action.type === 'ADD' ){
            const totalAmount = state.items.length
            // const updatedItem = state.items.concat(action.item)
            const totalUpdateAmount = action.totalAmount
            const isExistItem = state.items.findIndex((item) => item.id === action.item.id)
            console.log(isExistItem)
            const isTrueExist = state.items[isExistItem]
            console.log(isTrueExist)
            let updatedItems;
            if(isTrueExist){
               const updatedItem = {
                    ...isTrueExist,
                    amount: isTrueExist.amount + action.item.amount
                };
                updatedItems = [...state.items]
                updatedItems[isExistItem]=updatedItem
            }else{
                updatedItems = state?.items?.concat(action.item)
            }
            return {
                items: updatedItems,
                totalAmount: formater.format(totalUpdateAmount)
            }
        }
        if(action.type === 'REMOVE'){
            const isExsistingCartItem = state.items.findIndex(
                (item) => item.id === action.id
            )
            const exisItem = state.items[isExsistingCartItem];
            const updatedTotalAmount = state.totalAmount - exisItem.price;
        }
        return defaultState
    }
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

    const addItemCartHandler = (item) => {
        dispatchCart({
            type: 'ADD',
            item: item,
            totalAmount: item.amount * item.price
        })
    }
    const removeCartHandler = (id) => {
        dispatchCart({
            type: 'REMOVE',
            item:id
        })
    }

    const cartContext = {
        item: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeCartHandler
    }
    console.log(cartContext)

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}; 


export default CartProvider;