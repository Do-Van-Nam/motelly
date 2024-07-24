import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header'


export default function Home() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5713/login', {
        phone: phone,
        password: password
      })
      const { jwt, role } = response.data
      localStorage.setItem('jwt', jwt)
      localStorage.setItem('role', role)
      if (role === 'manager') window.location.href = '/manager'
      else window.location.href = '/tenant'
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div class="d-flex justify-content-evenly align-items-center" style={{ height: '100vh', width: '100vw' }}>
      <Header/>
      <Sidebar/>
      <img src='images/image.png' class="img-thumbnail" alt="..." style={{ height: '40vw', width: '40vw' }}></img>
      <form onSubmit={handleSubmit} style={{ height: '20vw', width: '20vw' }} class="d-grid gap-2">
        <div class="mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path></svg>
          <label for="exampleInputEmail1" class="form-label">   So dien thoai</label>
          <input type="text" class="form-control border border-2 border-warning-subtle" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={e => setPhone(e.target.value)} required
          />
        </div>
        <div class="mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path></svg>
          <label for="exampleInputPassword1" class="form-label">    Mat khau</label>
          <input type="password" class="form-control border border-2 border-warning-subtle" id="exampleInputPassword1"
            onChange={e => setPassword(e.target.value)} required
          />
          <p class="text-sm-end">Quen mat khau?</p>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Nho dang nhap</label>
        </div>
        <button type="submit" class="btn btn-primary btn-warning" >Dang nhap</button>
      </form>
    </div>

  )
}
