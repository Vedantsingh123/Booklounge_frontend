import React, {useState} from 'react';
import axios from 'axios';


const AddBook = () => {
  const [Data, setData] = useState(
    {
      url:"",
      title:"",
      author:"",
      price:"",
      desc:"",
      language:"",
    }
  );
  const headers = {
    id:localStorage.getItem("id"),
  };
  const change = (e) =>{
    const {name, value} = e.target;
    setData({...Data, [name]:value});
  };
  const submit = async() =>{
    try{
      if(
        Data.url === ""||
        Data.title === ""||
        Data.author === ""||
        Data.price === ""||
        Data.desc === ""||
        Data.language === ""
      ){
        alert("All feilds are requied");
      }else{
        const response = await axios.post("https://bookloune-backend.onrender.com/booksapi/add-book",Data,{headers});
        setData({
          url:"",
          title:"",
          author:"",
          price:"",
          desc:"",
          language:"",
        });
        alert(data.response.message);
      }
    }
    catch(error){
      alert(error.response.data.message);
    }
  }
  return (
    <div className='h-full p-0 md:4 '>
        <h1 className='md:text-5xl text-3xl font-semibold text-zinc-600 '>Add Book</h1>
        <div className='py-3 px-5 bg-zinc-800 mt-8 rounded'>
            <div className='flex-row items-center space-x-4'> {/* Flex container for row layout */}
                <label htmlFor="" className='text-zinc-400'>Image-:</label>
                <input 
                  placeholder='URL of image'
                  type="text"
                  className='p-2 rounded  bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                  name ="url"
                  required
                  value={Data.url}
                  onChange={change}
                  
                />
            </div>

            <div className='flex-row items-center space-x-4 mt-4'> {/* Flex container for row layout */}
                <label htmlFor="" className='text-zinc-400'>Title of book-:</label>
                <input 
                 placeholder='title of book'
                 type="text"
                 className='p-2 rounded bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                 name ="title"
                 required
                 value={Data.title}
                 onChange={change}
                 
                />
            </div>

            <div className='flex-row items-center space-x-4 mt-4'> {/* Flex container for row layout */}
                <label htmlFor="" className='text-zinc-400'>Author of book-:</label>
                <input 
                 placeholder='author of book'
                 type="text"
                 className='p-2 rounded bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                 name ="author"
                 required
                 value={Data.author}
                 onChange={change}
                 
                />
            </div>
            <div className='flex-row items-center space-x-4 mt-4'> {/* Flex container for row layout */}
                <label htmlFor="" className='text-zinc-400'>Language-:</label>
                <input 
                 placeholder='language of book'
                 type="text"
                 className='p-2 rounded bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                 name ="language"
                 required
                 value={Data.language}
                 onChange={change}
                 
                />
            </div>

            <div className='flex-row items-center space-x-4 mt-4'> {/* Flex container for row layout */}
                <label htmlFor="" className='text-zinc-400'>Price-:</label>
                <input 
                 placeholder='price of book'
                 type="number"
                 className='p-2 rounded bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                 name ="price"
                 required
                 value={Data.price}
                 onChange={change}
                 
                />
            </div>

            <div className='flex-row items-center space-x-4 mt-4'> 
                <label htmlFor="" className='text-zinc-400'>Description of book-:</label>
                <textarea 
                 placeholder='description of book'
                 type="text"
                 rows="5"
                 className='p-2 rounded bg-zinc-900 outline-none text-zinc-100 w-full mt-2'  
                 name ="desc"
                 required
                 value={Data.desc}
                 onChange={change}
                 
                />
            </div>
            <button className='mt-4 px-3 bg-blue-500 text-white font-semibold py-2 hover:bg-blue-600 transition-all duration-200' onClick={submit}>Add Book</button>
        </div>
    </div>
  )
}

export default AddBook
