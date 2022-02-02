import Character from '../PageItem/Character';
import Pagination from '../../Layout/Pagination';
import { useState,useEffect } from 'react';

const Characters = ({characters,searchValue,changeSearchText}) => {
   const [currentPage,setCurrentPage] = useState(1);
   const charactersPerPage = 6;
   const lastCharIndex = currentPage * charactersPerPage;
   const firstCharIndex = lastCharIndex - charactersPerPage;
   const fromBreakingBad = characters.filter(char => char.category === "Breaking Bad");
   const filteredCharacters = fromBreakingBad.filter((char)=>{
       return (char.name.toLowerCase().trim()
       .includes(searchValue.trim().toLowerCase())
    || char.nickname.toLowerCase().trim()
       .includes(searchValue.trim().toLowerCase())
       );
   });
   
   const pageCharacters = filteredCharacters.slice(firstCharIndex,lastCharIndex);
   const pages = Math.ceil(filteredCharacters.length/charactersPerPage);

        const handlePageNumber = (number)=>{
            setCurrentPage(number);
        }
        useEffect(()=>{
            changeSearchText('characters by name');
         },[]);
    return (
        <>
        
        { pageCharacters.length ?(
            <div className="container"> 
            {pageCharacters.map( character=> <Character char={character} key={character.char_id}/>)}
         </div> )
         : <p className='message'>No character was found try searching something else</p> 
        }
       
        <Pagination 
         pages={pages}
         handlePageNumber = {handlePageNumber}
         currentPage={currentPage}/>
        </>
        
    )
}

export default Characters
