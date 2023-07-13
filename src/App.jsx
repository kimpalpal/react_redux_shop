import { Route, Routes } from "react-router";
import { Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
// Layout 컴포넌트 넣고, 
//Outlet import 받아서 Layout.jsx에서 Outlet위치 확인하고 태그넣어줘야함

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Route>
      <Route
      path="*"
      element={
        <div style={{
          textAlign:"center",
          margin:"20px",
        }}>
          <div><h1>존재하지 않는 페이지입니다.</h1></div>
          <Link to="/">홈으로 이동</Link>
        </div>
      }
      />
    </Routes>
  );
}

export default App;