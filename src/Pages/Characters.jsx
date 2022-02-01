import Character from '../components/Character';
import Pagination from '../components/Pagination';
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
            changeSearchText('characters');
         },[]);
    return (
        <>
        <div className="container">
        { pageCharacters.length ?
         pageCharacters.map( character=> <Character char={character} key={character.char_id}/>
            ) :  'No character was found try searching something else'
        }
        </div>
        <Pagination 
         pages={pages}
         handlePageNumber = {handlePageNumber}
         currentPage={currentPage}/>
        </>
        
    )
}

export default Characters
