
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const Random = () => {


  const{gif, loading, fetchData}=useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='flex flex-col w-full items-center gap-y-10 mt-[15px] font-bold text-xl'>A Random Gif</h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" />
      )}

      <button
        onClick={clickHandler}
        className='w-10/12 bg-yellow-500 py-2 rounded-lg mb-[15px]'
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
