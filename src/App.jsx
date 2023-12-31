import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginUserPage from './pages/LoginUserPage'
import RegisterUserPage from './pages/RegisterUserPage'
import UserProfilePage from './pages/UserProfile'
import MainLayout from './layouts/MainLayout'
import NotFound404 from './pages/NotFound404'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginUserPage />} />
        <Route path='/register' element={<RegisterUserPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='*' element={<NotFound404 />} />
      </Route>
    </Routes>
  )
}

export default App