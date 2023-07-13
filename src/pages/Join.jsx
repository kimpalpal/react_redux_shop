import React from 'react'

function Join() {
  return (
    <div>
      <div style={{
      marginTop:"100px",
      textAlign:"center",
      }}>
        <h1>Eijin's Shop</h1>
        
        <h3> 회원 가입 화면입니다</h3>
        <div style={{
          margin:"5px",
        }}>            
          아이디 : <input></input>
        </div>
        <div style={{
          margin:"5px",
        }}>      
          비밀번호 : <input></input>
        </div>
        <div>      
          비밀번호 확인 : <input></input>
        </div>
        <button style={{
          margin:"5px",
        }}> 가입하기</button>
      </div>
    </div>
  )
}

export default Join