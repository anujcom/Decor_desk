import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from './components/scrollTop/ScrollTop';
import Allproducts from './pages/allproducts/Allproducts';


function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/order" element={
          <ProtectedRoute>
            <Order/>
          </ProtectedRoute>
        }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={
          <ProtectedRoutedForAdmin>
            <Dashboard/>
          </ProtectedRoutedForAdmin>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/addproduct" element={
          <ProtectedRoutedForAdmin>
            <AddProduct/>
          </ProtectedRoutedForAdmin>
        }/>
        <Route path="/updateproduct" element={
          <ProtectedRoutedForAdmin>
            <UpdateProduct/>
          </ProtectedRoutedForAdmin>
        }/>
        <Route path="/*" element={<Nopage/>}/>
       </Routes>
       <ToastContainer/>
      </Router>
    </MyState>
  )
}


export default App

//user
 export const ProtectedRoute=({children})=>{
  const user=localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

//admin
const ProtectedRoutedForAdmin=({children})=>{
  const admin= JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'dmzzzthedevil@gmail.com'){
    return children
  }else{
    return <Navigate to ={'/login'}/>
  }
}