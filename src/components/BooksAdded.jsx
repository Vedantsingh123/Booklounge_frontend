import React, {useState, useEffect } from 'react'
import axios from 'axios';
import BookCard from './BookCard'

const BooksAddedRecently = () => {
  const [Book, setBook] = useState();
  useEffect(() => {
  const fetch = async() => {
    const response = await axios.get("https://bookloune-backend.onrender.com/booksapi/get-recent-books");
    setBook(response.data.data);
  };
  fetch();
  },[]);

  return(
    <div className='mt-8 px-4'>
      <h4 className='text-3xl text-yellow-100'>Recently Added Books</h4>
      <div className='my-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Book && Book.map((items, i) =>(
           <div key ={i}> <BookCard data ={items}/> </div>
        ))}
      </div>
    </div>
  )
}

export default BooksAddedRecently;