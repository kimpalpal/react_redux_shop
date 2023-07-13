import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

export default function Product() {
  // url Parameter : url 클릭시 해당상품으로 이동하기 
  //1)App.js에서 Route에 id로 ( App.js에 기재한 값이랑 일치해야함!) 연결 2)useParams import 
  // const {id}= useParams();
  //console.log(id);  상품 클릭시 상품의 id값을 확인 할 수 있음 

    const params = useParams();
    const foundData = data.find((item)=>{
      return item.id === parseInt(params.id);
    })


    console.log("size: ", foundData.size[2]);
    
    //옵션선택
    const [selectedSize, setSelectedSize] = useState('');
  const sizeHandler = (event) =>{
    setSelectedSize(event.target.value);
  }
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
          </div>

        </div>
      </div>
      
    </>
  );
}