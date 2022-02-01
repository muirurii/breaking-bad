import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import { useState,useEffect } from 'react';
import Characters from './Pages/Characters';
import Episodes from './Pages/Episodes';
import Loader from './components/Loader';
import fetchFunction from './components/Fetch';

const App = () => {
  const [search,setSearch] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [characters,setCharacters] = useState([]);
  const [episodes,setEpisodes] = useState([]);
  const [searchText,setSearchText] = useState('characters');

  useEffect(()=>{
    setIsLoading(true);
     
        const fetchData = async ()=>{ 
        const charactersData = await fetchFunction('characters');
        const  episodesData =  await  fetchFunction('episodes');
        
        setCharacters(charactersData);
        setEpisodes(episodesData);
        
        setIsLoading(false)
          }
      fetchData();
  
  },[]);

  const handleSearch = (value)=>{
    setSearch(value);
  }
  const changeSearchText = (text)=>{
    setSearchText(text);
  }
  return (
    <div>
      <BrowserRouter>
        <Header search={search} 
        searchText={searchText}
        handleSearch = {handleSearch} 
        />
       {isLoading ? <Loader /> :
        <Routes>
          <Route path='/' 
          element={<Characters 
          characters={characters}
          searchValue={search}
          changeSearchText={changeSearchText}
          />}
          />
          <Route path='/episodes' 
          element={<Episodes
          episodes={episodes}
          searchValue={search}
          changeSearchText={changeSearchText}
            />} 
          />
        </Routes>
              }
      </BrowserRouter>
    </div>
  )
}


export default App;