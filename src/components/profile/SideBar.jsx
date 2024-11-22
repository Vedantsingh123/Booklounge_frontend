import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GrLogout } from "react-icons/gr";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/auth";
import { useSelector } from 'react-redux';
const SideBar = ({data}) => {
  const dispatch = useDispatch();
 const history = useNavigate();
    const avatar = data?.avatar || 'default-avatar.png'; // Change 'default-avatar.png' to your default image
    const username = data?.username || 'Guest';
    const email = data?.email || 'guest@example.com';
    const role = useSelector((state) => state.auth.role);
  return (
    <div className='bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]'>
        <div className='flex flex-col items-center justify-center'>
      <img src={avatar} alt="" className='h-[10vh]' />
      <p className='mt-3 text-xl text-zinc-100 font-semibold'>{username}</p>
      <p className='mt-1 text-normal text-zinc-300'>{email}</p>
      <div className='w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block'></div>
      </div>
      {role === "user" &&
      <div className='w-full flex-col items-center justify-center hidden lg:flex'>
        <Link to="/profile" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300' >
        Favourites</Link>
        <Link to="/profile/orderhistory" className='text-zinc-100 mt-4 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300' >
        Order History</Link>
        <Link to="/profile/settings" className='text-zinc-100 mt-4 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300' >
        Settings</Link>
      </div>
}
      {role === "admin" &&
      <div className='w-full flex-col hidden items-center justify-center lg:flex'>
      <Link to="/profile" className='text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300' >
      All Orders</Link>
      <Link to="/profile/add-book" className='text-zinc-100 mt-4 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300' >
      Add Books</Link>
      
    </div>
      }
      <button className='bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 yext-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300' onClick={() => {
        dispatch(authActions.logout());
        dispatch(authActions.changeRole("user"));
        localStorage.clear("id");
        localStorage.clear("role");
        history("/");
      }}>Log-Out           <GrLogout className='ms-4' /></button>
    
    </div>
  )
}

export default SideBar