import React, { useEffect, useState } from 'react';
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SUGGESTION_API } from '../utils/constans';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const[showSuggestions,setShowsuggestion]=useState(false);
  const searchCache=useSelector((store)=>store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      
      if (searchQuery){ 
        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }
       else {
          getSearchSuggestions();
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    
      const response = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
      const json = await response.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({
        [searchQuery]: json[1],
      }));
  };
  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-cols-12 p-4 mx-3 bg-white shadow-md items-center'>
      

      <div className='flex items-center col-span-1'>
        <img 
          className='h-8 cursor-pointer'
          onClick={toggleMenuHandler}
          alt='menu'
          src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png'
        />
        <a href='/'>
          <img 
            className='h-8 ml-2'
            alt='youtube-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'
          />
        </a>
      </div>


      <div className='col-span-10 relative '>
        <div className="flex">
          <input 
            className='ml-40 w-1/2 border border-gray-300 p-2 rounded-l-full'
            type='text'
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e)=>{setShowsuggestion(true)}}
            onBlur={(e)=>{setShowsuggestion(false)}}
          />
          <button className='border border-gray-300 py-2 px-5 bg-gray-100 rounded-r-full hover:bg-gray-200'>🔍</button>
        </div>

        {/* Suggestions Dropdown */}
        {searchQuery&&showSuggestions && (
          <div className='ml-40 absolute left-0 w-1/2 bg-white border border-gray-300 shadow-lg rounded-b-lg mt-1'>
            <ul className="py-2">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className='col-span-1 flex justify-end'>
        <img 
          className='h-8 rounded-full'
          alt='user-icon'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjocfAiPmkzqDQu_tmtXKQPauoSBwQIwT1iDtMsAPA2SPucnhwVz-k9-rplQqmWDUI5uA&usqp=CAU'
        />
      </div>
    </div>
  );
};

export default Head;
