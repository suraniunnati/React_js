import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Signup from '../component/signup'
import Login from '../component/login'
import Product from '../component/Product'
import PrivateRoute from '../component/PrivateRoute'

function MainRount() {
  return (<>
  
    <Routes>
        <Route path='/signup' element={<Signup/>}>signup</Route>
        <Route path='/login' element={<Login/>}>signup</Route>
        <Route path='/product' element={
            // <PrivateRoute>
            <Product/>
            // </PrivateRoute>
        }>product</Route>
    </Routes>

    </>

  )
}

export default MainRount