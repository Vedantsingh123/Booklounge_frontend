import React, {useEffect, useState} from 'react';
import BookCard from '../components/BookCard';
import axios from 'axios';


const AllBooks = () => {
  const [Book, setBook] = useState();
  useEffect(() => {
  const fetch = async() => {
    const response = await axios.get("https://bookloune-backend.onrender.com/booksapi/get-all-books");
    setBook(response.data.data);
  };
  fetch();
  },[]);

  return (
    <div className='bg-zinc-900 px-12 h-auto py-8'> <h4 className='text-3xl text-yellow-100'>Discover All Books</h4>
    <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {Book && Book.map((items, i) =>(
         <div key ={i}> <BookCard data ={items}/> </div>
      ))}
    </div></div>
  )
}

export default AllBooks;