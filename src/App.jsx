import React from "react";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import { BrowserRouter , Route,Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Admin from "./user/Admin";
import User from "./user/User";
import Orders from "./components/Orders";
import Tableview from "./components/Tableview";
import AdminSignup from "./user/AdminSignup";
import First from "./components/First";
const App = () => {
  return (

<>
<div>
<BrowserRouter>
   <Navbar/>
      <Routes>
           <Route path='/sign' element={<AdminSignup/>}></Route>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='/dishes' element={<Dishes/>}></Route>
           <Route path='/user' element={<User/>}></Route>
           <Route path='/admin1' element={<Admin/>}></Route>
           <Route path='/tables' element={<Tableview/>}></Route>
           <Route path='/orders' element={<Orders/>}></Route>
           <Route path='/first' element={<First/>}></Route>
      </Routes>
</BrowserRouter>
</div>
</>
  );
};

export default App;
