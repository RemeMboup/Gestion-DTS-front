import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import TestLogin  from './components/TestLogin'
import ClientList from './components/Clients/ClientList'
import AddClient from './components/Clients/AddClient'
import EditClient from './components/Clients/EditClient'

function App() {

  return (
    <Routes>
      <Route path='/' element ={<LoginPage />}></Route>
      <Route path='/test' element ={<TestLogin />}></Route>
      <Route path='/clientList' element ={<ClientList />}></Route>
      <Route path="/clients/add" element={<AddClient />} />
      <Route path="/clients/edit/:clientId" element={<EditClient />} />
    </Routes>
  )
}

export default App
