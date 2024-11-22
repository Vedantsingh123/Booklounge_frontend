import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { MdOutlineSegment } from "react-icons/md";
import { useSelector } from 'react-redux';


const Navbar = () => {


  const [Navbar, setNavbar] = useState('hidden');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn)
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      <nav className=' relative z-50 flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
        <div className='flex items-center'>
          <img
            className='h-9 me-4'
            src={logo}
            alt="BookLounge logo"
          />
          <h1 className='text-2xl font-semibold'>BookLounge</h1>
        </div>
        <div className=' flex-grow block md:flex justify-center'>
          <div className=' hidden md:flex gap-5 text-lg'>

            <Link to="/" className='hover:text-yellow-500 transition-all duration-300'>Home</Link>
            <Link to="/all-books" className='hover:text-yellow-500 transition-all duration-300'>All Books</Link>
            {isLoggedIn && role === "user" &&(
              <>
                <Link to="/cart" className='hover:text-yellow-500 transition-all duration-300'>Cart</Link>
                <Link to="/profile" className='hover:text-yellow-500 transition-all duration-300'>Profile</Link>
              </>
            )}
            {isLoggedIn == true && role ==="admin" && (
              <>
               <Link to="/cart" className='hover:text-yellow-500 transition-all duration-300'>Cart</Link>
              <Link to="/profile" className='hover:text-yellow-500 transition-all duration-300'>Admin Profile</Link>
              </>
            )}
          </div>
        </div>
        <div className='hidden md:flex gap-4'>
          {!isLoggedIn && (
            <>
          <Link to='/LogIn' className='px-4 py-1 border border-yellow-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>LogIn</Link>
          <Link to='/SignUp' className='px-4 py-1 bg-yellow-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>SignUp</Link>
          </>
          )}
        </div>
        <button className=' block md:hidden text-white text-2xl hover:text-yellow-500' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>
          <MdOutlineSegment />
        </button>
      </nav>
      <div className={`${Navbar} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        <Link to="/" className=' text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>Home</Link>
       
        <Link to="/all-books" className=' text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>All Books</Link>

        {isLoggedIn && role ==="user" && (
          <>
            <Link to="/cart" className=' text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>Cart</Link>
            <Link to="/profile" className='text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>Profile</Link>
          </>
        )};

{isLoggedIn && role ==="admin" && (
          <>
            <Link to="/cart" className=' text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>Cart</Link>
            <Link to="/profile" className='text-white text-4-xl font-semibold hover:text-yellow-500 transition-all duration-300 mb-9' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>Admin Profile</Link>
          </>
        )};

        
{!isLoggedIn && (
          <>
        <Link to='/LogIn' className='text-3xl font-semibold mb-9 px-8 py-2 text-white border border-yellow-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>LogIn</Link>
        <Link to='/SignUp' className='text-3xl font-semibold mb-9 px-8 py-2 bg-yellow-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300' onClick={() => (Navbar === 'hidden' ? setNavbar('block') : setNavbar('hidden'))}>SignUp</Link>
        </>
)}

      </div>
    </>
  );
};

export default Navbar;