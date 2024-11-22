import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BookCard = ({ data, favourite, onRemove }) => {
  const headers = {
    id: localStorage.getItem('id'),
    bookid: data._id,
  };

  const handleRemove = async () => {
    try {
      const response = await axios.put('https://bookloune-backend.onrender.com/favouriteapi/remove-book-from-favourite', {}, { headers });
      alert(response.data.message);
      onRemove(); // Call the callback to refetch favourites
    } catch (error) {
      console.error("Error removing book:", error);
    }
  };

  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col'>
      <Link to={`/view-book-details/${data._id}`}>
        <div>
          <div className='bg-zinc-900 flex items-center justify-center'>
            <img src={data.url} alt="/" className='h-[35vh]' />
          </div>
          <h2 className='mt-5 text-lg text-white font-semibold'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>{data.author}</p>
          <p className='mt-2 text-zinc-200 font-semibold text-xl'>₹ {data.price}</p>
        </div>
      </Link>
      {favourite && (
        <button
          className='px-2 py-4 font-semibold hover:bg-white hover:text-zinc-900 transition-all duration-300 bg-red-500 mt-2 rounded'
          onClick={handleRemove}
        >
          Remove from favourites
        </button>
      )}
    </div>
  );
};

export default BookCard;
