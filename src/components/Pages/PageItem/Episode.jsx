import replaceString from "../../Functions/ReplaceString";

const Episode = ({episode}) => {
    return (
        <div className='episode'>
            <h3>{episode.episode_id}</h3>
            <div className="episode-details">
                <h4>Title:</h4> <span>{episode.title}</span> <br />
                <h4>Season:</h4> <span>{episode.season}</span> <br />
                <h4>Air Date:</h4> <span>{episode.air_date}</span> <br />
                <h4>Main Characters:</h4> <span>{
                episode.characters.map((char,index)=> index === episode.characters.length-1 ? replaceString(char,'.','') 
                : `${replaceString(char,'.','')},`)}</span>
            </div>
        </div>
    );
}

export default Episode;
