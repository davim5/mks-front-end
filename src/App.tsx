import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import {  Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Footer } from "./components/Footer";
import { createContext, useReducer } from "react";
import produce from "immer";

export interface IProduct {
  brand: string,
  createdAt: string,
  description: string
  id: number
  name: string
  photo: string
  price: string
  updatedAt: string
}

interface CartContextType {
  products: IProduct[];
  totalPrice: number;
  addCart: (product:IProduct) => void;
}

interface CartContextProps {
  products: IProduct[];
  totalPrice: number;
  
}

function reducer( state:CartContextType, action:any ) {
  switch(action.type){
    case 'ADD_PRODUCT_TO_CART':
      return produce(state, (draft) => {
          draft.products.push(action.payload.product);
          draft.totalPrice += parseFloat(action.payload.product.price); 
      });
    default:
      return state
  }
}

export const CartContext = createContext({} as CartContextType)

export function App() {

  const addCartAction = (product:IProduct) => {
    console.log('adicionar ao carrinho');
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: 
      { 
        product,
      }
    });
  }

  const [cart, dispatch] = useReducer(reducer, {
    products:[],
    totalPrice:0,
    addCart: addCartAction
});

console.log(cart);



  return (
    <ThemeProvider theme={defaultTheme}>
        <CartContext.Provider value={{ products:cart.products,totalPrice:cart.totalPrice, addCart: addCartAction}}>
          <Header />
          <Home />
          <Footer />
          <GlobalStyle />
        </CartContext.Provider>
    </ThemeProvider>
  )
}