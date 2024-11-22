import React from 'react';
import book from '../assets/bookshelve.png'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className='h-auto min-h-[75vh] flex flex-col md:flex-row items-center'>
      <div className='w-full max-w-2xl flex flex-col items-start justify-center px-4'>
        <h1 className='text-4xl md:text-6xl font-semibold text-yellow-100'>
          Get Lost in the Pages
        </h1>
        <p className='mt-4 text-lg md:text-xl text-zinc-300'>
          Crafting reading experiences, one book at a time, enriching knowledge and endless inspiration.
        </p>
        <div className='mt-8'>
          <Link to = '/all-books' className='border border-yellow-500 px-8 py-4 hover:rounded-full transition-all duration-300 text-yellow-500 md:text-lg hover:bg-yellow-500 hover:text-zinc-800 focus:outline-none'>
            Discover Books
          </Link>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <img src={book} alt="Bookshelf with various books" className='w-full h-auto object-cover' />
      </div>
    </div>
  );
};

export default Body;