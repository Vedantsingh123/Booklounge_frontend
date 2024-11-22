import React, {useEffect, useState} from 'react'
import SideBar from '../components/profile/SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import MobileNav from '../components/profile/MobileNav';

const Profile = () => {
const [profile, setProfile] = useState();

  //const isLoggedIn = useSelector();
  const headers = {id:localStorage.getItem("id"),}
  useEffect(()=> {
   const fetch = async() =>{
    const response = await axios.get('https://bookloune-backend.onrender.com/userapi/userinformation',{headers});
    setProfile(response.data);
   }
   fetch();
  },[])
  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col lg:flex-row py-8 gap-4 text-white overflow-hidden items-center'>
      <div className='lg:w-1/6  w-full md:h-[40vh] lg:h-screen '>
        <SideBar data ={profile}/>
        <MobileNav/>
      </div>
      <div className='md:w-5/6 w-full'>
        <Outlet/> 
      </div>
    </div>
  )
}

export default Profile