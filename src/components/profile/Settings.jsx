import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios';

const Settings = () => {
  const [profileData, setProfileData] = useState();
  const [Value, setValue] = useState({address: ""});

  const headers ={
    id:localStorage.getItem("id")
  };

  const change = (e) => {
    const {name, value} = e.target;
    setValue({...Value,[name]:value});
  };

  useEffect(() =>{
    const fetch = async() =>{
      const response = await axios.get("https://bookloune-backend.onrender.com/userapi/userinformation",{headers});
      setProfileData(response.data)
      setValue({address: response.data.address})
    }
    fetch();
  },[])

  const submitAddress = async() => {
    const response = await axios.put("https://bookloune-backend.onrender.com/userapi/updateaddress",Value,{headers})
    alert(response.data.message)
  }
  return <>
  {profileData && (
    <div className="h-[100%] p-0 md:p-4 text-zinc-100">
      <h1 className="text-3xl md:text-5xl font-bold text-zinc-500 ">Settings</h1>
      <div className="flex gap-8 mt-5"> 
      <div>
          <label htmlFor="">Username</label>
          <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">{profileData.username}</p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">{profileData.email}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="">Address</label>
        <textarea 
        className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
        rows="5"
        placeholder="Address"
        name = "address"
        value={Value.address}
        onChange={change}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400" onClick={submitAddress}>
          Update
        </button>
      </div>
    </div>
  
  )}
  </>
}

export default Settings