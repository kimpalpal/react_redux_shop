import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { data } from "../shared/data"
export default function Products() {
//가격순으로 정리하기 1.useSearchParams 사용하여 2.버튼에 onClick으로 함수실행
//const [값, 변경함수 ] = useSearchParams();  
const [searchParas,setSearchParams] = useSearchParams();

    return (
    <>
     
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button style={{
          margin:"10px",
         }}
         onClick={()=>{
          // setSearchParams ({객체형태}) -> useEffect를 사용해서 데이터 순서를 바꿀 수 있음 
          setSearchParams({
            sort:"price",
          });
         }}
         >가격순으로 정리 </button>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 상품 클릭시 해당 상품 페이지로 이동하기 
          - <Link to="/상품페이지주소"></Link> */}
          
            { data.map((product) => (
              <Link  key={product.id} to={`/products${product.to}`}>
                <div  
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#c7dcf2",
                  margin:"10px",
                  
                }}
              >
              <h3>{product.name}</h3>
              <div>가격: {product.price}원</div>
              </div>
              </Link>
          ))}
          
         
         </div>
      </div>
    </>
  );
}