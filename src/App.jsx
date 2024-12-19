import { Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"

import Fiction from "./pages/Fiction"
import NonFiction from "./pages/NonFiction"
import { TextBooks } from "./pages/TextBooks"
import SellBook from "./pages/SellBooks"
import Cart from "./pages/Cart"
import AllBooks from "./components/Allbooks"
import Pagenotfound from "./pages/PagenotFound"
import AdminHome from "./pages/AdminHome"
import ViewUser from "./admin pages/ViewUser"
import ViewBooks from "./admin pages/ViewBooks"
import Account from "./pages/Account"
import Profile from "./components/Profile"
import MyOrders from "./components/MyOrders"
import SellingOrders from "./components/SellingOrders"


function App() {
 
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth register={false}/>}/>
    <Route path='/register' element={<Auth register={true}/>}/>
    <Route path='/fiction' element={<Fiction/>}/>
    <Route path='/non-fiction' element={<NonFiction/>}/>
    <Route path='/textbooks' element={<TextBooks/>}/>
    <Route path='/sell' element={<SellBook/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/allbooks' element={<AllBooks/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
    <Route path='/adminhome' element={<AdminHome/>}/>
    <Route path='/viewuser' element={<ViewUser/>}/>
    <Route path='/viewbooks' element={<ViewBooks/>}/>
    <Route path="/account/*" element={<Account />}>
    <Route path="profile" element={<Profile />} />
    <Route path="orders" element={<MyOrders />} />
    <Route path="selling-orders" element={<SellingOrders />} />
  </Route>


    </Routes>
    
    </>
  )
}

export default App
