import React, {useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AllBooks from './pages/AllBooks';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import BookDetails from './components/BookDetails';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import Favourites from './components/profile/Favourites'
import UserOrderHistory from './components/profile/UserOrderHistory'
import Settings from './components/profile/Settings'
import AllOrders from "./pages/AllOrders"
import AddBook from "./pages/AddBook"
import UpdateBook from './pages/UpdateBook';


const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    if(localStorage.getItem("id") &&
    localStorage.getItem("role"))
    {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  },[])
  return (
 <div>

      <Navbar/>
      <Routes>
       <Route exact path='/' element = {<Home/>}/>
       <Route path='/all-books' element= {<AllBooks/>}/>
       <Route path = 'LogIn' element = {<LogIn/>}/>
       <Route path = '/UpdateBook/:id' element = {<UpdateBook/>}/>
       <Route path = 'SignUp' element = {<SignUp/>}/>
       <Route path='/cart' element= {<Cart/>}/>
       <Route path='/profile' element= {<Profile/>}>
       {role === "user" ? <Route index element={<Favourites/>}/> : <Route index element={<AllOrders/>}/>}
       {role === "admin" && <Route path='/profile/add-book' element={<AddBook/>}/>}
       <Route path='/profile/orderhistory' element={<UserOrderHistory/>}/>
       <Route path='/profile/settings' element={<Settings/>}/>
       </Route>
       <Route path = 'view-book-details/:id' element= {<BookDetails/>}/>
      </Routes>
      <Footer/>
  
  </div>
  );
};

export default App