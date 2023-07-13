import React from 'react'

function Login() {
  return (
    <div style={{
      marginTop:"100px",
      textAlign:"center",
    }}>
      <h1>로그인화면</h1>
      <div>      
        아이디 : <input></input>
      </div>
      <div>      
        비밀번호 : <input></input>
      </div>
      <button> 로그인</button>
    </div>
  )
}

export default Login