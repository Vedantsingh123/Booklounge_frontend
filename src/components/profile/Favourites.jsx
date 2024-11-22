import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../BookCard';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const headers = { id: localStorage.getItem('id') };

  const fetchFavourites = async () => {
    try {
      const response = await axios.get('https://bookloune-backend.onrender.com/favouriteapi/get-favourite-books', { headers });
      setFavourites(response.data.data || []);
    } catch (error) {
      console.error("Error fetching favourites:", error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []); // Run once on mount

  return (
 
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {favourites.length > 0 ? (
      favourites.map((item, i) => (
        <BookCard key={i} data={item} favourite={true} onRemove={fetchFavourites} />
      ))
    ) : (
      <div className='col-span-1 sm:col-span-2 md:col-span-3 flex items-center justify-center h-full'>
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-700'>No Favourite Book</div>
      </div>
    )}
  </div>
  
  );
};

export default Favourites;
