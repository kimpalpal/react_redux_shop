import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//1 import
import { configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import Product from './pages/Product';

const initialState = [
  { id: 1, 
    name: "👖멋진 바지🩳", 
    price: 20000, 
    to:"/1", 
    likes:100, 
    size:[28,30,32]},
  { id: 2, 
    name: "👚멋진 셔츠👔", 
    price: 10000, to:"/2", 
    likes:200, 
    size:['small','medium','large']},
  { id: 3, 
    name: "👞멋진 신발👠", 
    price: 30000, 
    to:"/3", 
    likes:300, 
    size:[230,240,250,260,270]},
];

let 상품들 = createSlice({
  name:"상품들",
  initialState,
  reducers :{
    sortByPrice: (state) => {
      state.sort((a, b) => a.price - b.price);
  },
    reset: () => {
      return initialState;
    }
},
});


// 장바구니 만들기 

 const 장바구니 = createSlice({
  name:"장바구니",
  initialState: [], //초기값
  reducers:{
    장바구니추가:(state,action)=>{
      state.push(
        action.payload
      );
    }
  }  
 })
export const {reset} = 상품들.actions;
export const {sortByPrice } = 상품들.actions;
export const { 장바구니추가 } = 장바구니.actions;
const store = configureStore({
  reducer:{
    상품들: 상품들.reducer,
    장바구니 : 장바구니.reducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
