import { createContext,useContext } from "react"
import { initialProducts } from "../data/product"


const cartContext=createContext() 

export const CartProvider = (props) => {
    const products=initialProducts

  return (
    <cartContext.Provider value={{products}}>
        {props.children}
    </cartContext.Provider>
  )
}

export const useCart=()=> useContext(cartContext)


