import replaceString from "./ReplaceString";

const Character = ({char}) => {
     return (
        <div className="character">
          <div className="background">
           <img src={char.img} alt={char.name + "'s picture"} />
          </div> 
          <div className= "char-details">
            <div className="char-initial">
                <div>
                    <label className="highlight">{
                    replaceString(char.name,'&amp;','and')
                    }</label>
                 </div>
                <div>
                    <h4>Name</h4>: <label>{
                 replaceString(char.portrayed,'&amp;','and')}</label>
                </div>
            </div>
            <div className="char-more">
                <div>
                    <h4>Nickname</h4>: <label>{char.nickname}</label>
                </div>
                <div>
                    <h4>Status</h4>: <label>{char.status}</label>
                </div>
                <div>
                    <h4>Occupation</h4>: {char.occupation.map(
                    (occ,index)=> <label key={index}>{
                       replaceString(occ,'&amp;','and') +  
                    (char.occupation.length-1=== index ? '' : ',')}
                    </label>)}
                </div>
                <div>
                    <h4>Birthday</h4>: <label>{char.birthday}</label>
                </div>
                <div>
                    <h4>Character Id</h4>: <label>{char.char_id}</label>
                </div>
            </div>
           </div>
        </div>
    )
}

export default Character;
