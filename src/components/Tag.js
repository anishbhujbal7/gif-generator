import React, { useState } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
  
  const [tag,setTag] = useState('car');
  const {gif,loading, fetchData}=useGif(tag)

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event){
   setTag(event.target.value)
  }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='flex flex-col w-full items-center gap-y-10 mt-[15px] font-bold text-xl'>Random {tag} Gif</h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}

      <input 
        className='w-10/12 py-2 rounded-lg mb-[15px]'
        value={tag} // always bound
        onChange={changeHandler}
        placeholder="Enter a tag"
      />

      <button
        onClick={clickHandler}
        className='w-10/12 bg-yellow-500 py-2 rounded-lg mb-[15px]'
        
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
