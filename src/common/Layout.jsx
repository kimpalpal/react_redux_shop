import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
//   Nested Routes -계속 반복되는 내용 따로 빼주기 

function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
          marginBottom:"1px"
        }}
      >
        <Link style={{
          textDecorationLine:"none",
          color:"white",
        }}
        to="/">
          <div>Logo</div>
        </Link>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link style={{
            textDecorationLine:"none",
            color:"white",
          }}
          to="/login">
            <div>로그인</div>
          </Link>
          <Link style={{
            textDecorationLine:"none",
            color:"white",
          }}
          to="/Join">
          <div>회원가입</div>
          </Link>
        </div>
      </header>
      {/*  App.js 에서 Outlet import 후 넣어주기*/}
      <Outlet/> 
      {/* footer */}
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          // 아래 css 추가
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  )
}

export default Layout