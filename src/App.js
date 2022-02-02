import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header'
import { useState,useEffect } from 'react';
import Characters from './components/Pages/PageContent/Characters';
import Episodes from './components/Pages/PageContent/Episodes';
import Loader from './components/Layout/Loader';
import fetchFunction from './components/Functions/Fetch';

const App = () => {
  const [search,setSearch] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [characters,setCharacters] = useState([]);
  const [episodes,setEpisodes] = useState([]);
  const [searchText,setSearchText] = useState('characters by name');
  const [fetchError,setFetchError] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
     
        const fetchData = async ()=>{ 
        const charactersData = await fetchFunction('characters');
        const episodesData =  await  fetchFunction('episodes');
        
        setIsLoading(false);
      

        setCharacters(charactersData);
        setEpisodes(episodesData);
        if(charactersData.length || episodesData.length){
          setFetchError(false);
          return;
        }
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
       {isLoading ? <Loader /> : fetchError ? <p className='message'>Please connect to the internet</p> :  (
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
        </Routes>)
          }
      </BrowserRouter>
    </div>
  )
}


export default App;