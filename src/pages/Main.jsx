
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Main() {
 
  const products = useSelector (( state )=>state.상품들)


  return (
    <>
    
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#9403fc",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>
          {/* Link태그 추가시 Link import 되었는지 확인하기 , 
          a태그와 같은기능 
          추가 적인 코드가 필요할 경우에는 useNavigate를 사용한다*/}
        <Link to="/products">더보기</Link>
          <div
            style={{
              display: "flex",              
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div>
            { products.map((product) => (
              <div 
                style={{
                  display:"inline-block",
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#c7dcf2",
                  margin:"10px",
                  
                }}
              >
              <div key={product.id}>  {product.name}</div>
              </div>              
          ))}
            </div>
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#e1c6f5",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#e1c6f5",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#e1c6f5",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>

    </>
  );
}