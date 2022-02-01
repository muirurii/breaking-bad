import Pagination from '../../Layout/Pagination';
import Episode from '../PageItem/Episode';
import {useState,useEffect} from 'react';

const Episodes = ({episodes,changeSearchText,searchValue}) => {
   const [currentPage,setCurrentPage] = useState(1);
   const episodesPerPage = 10;
   const lastEpisodeIndex = currentPage * episodesPerPage;
   const firstEpisodeIndex = lastEpisodeIndex - episodesPerPage;
   const fromBreakingBad = episodes.filter(ep => ep.series === "Breaking Bad")
   const filteredEpisodes = fromBreakingBad.filter((episode)=>{
    return (episode.episode_id ===(+searchValue)
 || episode.title.toLowerCase().trim()
    .includes(searchValue.trim().toLowerCase())
    );
});
   const pageEpisodes = filteredEpisodes.slice(firstEpisodeIndex,lastEpisodeIndex);
   const pages = Math.ceil(filteredEpisodes.length/episodesPerPage);
    useEffect(()=>{
       changeSearchText('episodes');
    },[]);
        const handlePageNumber = (number)=>{
            setCurrentPage(number);
        }
   return (
        <div>
            <div className='episodes'>
                { pageEpisodes.length ?
                  pageEpisodes.map(episode=>{
                      return(
                            <Episode  key={episode.episode_id} episode={episode}/>
                            )
                        }) : 'No episodes found try searching something else'
                    }
                </div>
            <Pagination
                pages={pages}
                handlePageNumber = {handlePageNumber}
                currentPage={currentPage}
            /> 
        </div>
    )
}

export default Episodes
