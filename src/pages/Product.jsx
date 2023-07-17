import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 장바구니추가 } from "..";
export default function Product() {
  // url Parameter : url 클릭시 해당상품으로 이동하기 
  //1)App.js에서 Route에 id로 ( App.js에 기재한 값이랑 일치해야함!) 연결 2)useParams import 
  // const {id}= useParams();
  //console.log(id);  상품 클릭시 상품의 id값을 확인 할 수 있음 
  const cart = useSelector((state)=>state.장바구니)
    const products = useSelector (( state )=>state.상품들)
    const params = useParams();
    const dispatch = useDispatch();
    const foundData = products.find((item)=>{
      return item.id === parseInt(params.id);
    }) // useParams 사용할 경우 무조건 문자형으로 반환되어서 숫자형으로 일치하도록 바꿔줘야함

      
    //옵션선택
    const [selectedSize, setSelectedSize] = useState('');
  const sizeHandler = (event) =>{
    setSelectedSize(event.target.value);  }
    
    
  return (
    <>
      
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#c7dcf2",
            }}
          >
            {foundData.name}
          </div>
          <div>
            <h3>가격: &nbsp;{foundData.price}원</h3>
            <h3>좋아요:&nbsp;{foundData.likes}개</h3>
            <h3>구매 옵션&nbsp;
             <select value={selectedSize}
             onChange={sizeHandler}>
              {foundData.size.map((sizeData)=>{
                return (                             
                  <option value={sizeData}>{sizeData}</option>
                )
              })}
            </select>
            </h3>
            <div>선택한 구매옵션 : {selectedSize}</div>         
            <button onClick={()=>{
              dispatch(장바구니추가(foundData))
            }}>
              장바구니 추가하기</button>   
          </div>

        </div>
        
        <h1>장바구니</h1>
         {cart.map((상품)=>{
          return <><div>{상품.name}</div>
          <div>{상품.price}</div></>
         })}
         
      </div>
      
    </>
  );
}