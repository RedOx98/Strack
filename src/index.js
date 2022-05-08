import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserList from './pages/userList/UserList';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from './personal request/User';
import Login from "./pages/Login/Login";
import NewUser from './pages/newUser/NewUser';
import ProductsList from './pages/productsList/ProductsList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Register from './pages/register/Register';

const root = document.getElementById('root')
render(
<Router>
<Routes>
<Route path="/" element={<App />} />
<Route path="/users" element={<UserList />} />
<Route
        path="users/:userId"
        element={<User />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/newUser"
        element={<NewUser />}
      />
      <Route
        path="/products"
        element={<ProductsList />}
      />
       <Route
        path="/products/:productsId"
        element={<Product />}
      />
      <Route
        path="/newProduct"
        element={<NewProduct />}
      />
</Routes>
</Router>, 
root
);