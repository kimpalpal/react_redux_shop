import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { sortByPrice } from "..";
import { reset } from "..";

export default function Products() {
//가격순으로 정리하기 1.useSearchParams 사용하여 2.버튼에 onClick으로 함수실행
//const [값, 변경함수 ] = useSearchParams();  
const [searchParams,setSearchParams] = useSearchParams();
const products = useSelector (( state )=>state.상품들)
const dispatch = useDispatch();

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
          dispatch(sortByPrice());
         }}
         >가격순으로 정리 </button>
         <button style={{
          margin:"10px",
         }}
         onClick={()=>{
          dispatch(reset());
         }}
         >리셋 </button>

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
          
            { products.map((product) => (
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