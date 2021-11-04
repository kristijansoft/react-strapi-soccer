import React, { createContext, useContext, useEffect, useReducer } from 'react'

//providing state data layer
export const StateContext = createContext()

export const StateProvider = ({ reducer, initialSate, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialSate)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)

export const initialState = {
  basket: [],
}

export const reucer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Item':
      break
    default:
      return state
  }
}
// wrap the stateprovider around the app.js and pass in reducer and initialsate values.when this is done u can call the useStateValue function and get a state,dispatch from it since usereducer in the stateprovider return that.with that said always combine all your reducers and be using dispatch to update the state.
//lets say u want to get acces to the length of the basket in the header jux do this  const [{basket}]=useStateValue(); or cosnt [state,dispatch]=usesTATEVALUE(). THIS WILLL ENABLE U GET ACCESS TO THE CURRENT STATE OF THE OBJECT
const addToBasket = () => {
  dispatch({
    type: 'Add_Item',
    payload: {
      id: 1,
      name: 'phone',
    },
  })
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
)

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
)
