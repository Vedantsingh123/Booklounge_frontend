import React from 'react';
import Body from '../components/Body'
import BooksAdded from '../components/BooksAdded';

const Home = () => {
  return (
    <div className='text-white bg-zinc-900 px-10 py-8'>
      <Body/>
      <BooksAdded/>
    </div>
  )
}

export default Home