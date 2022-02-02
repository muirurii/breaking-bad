import {Link} from 'react-router-dom';
import {useRef} from 'react';

const Header = ({search,handleSearch,searchText}) => {
    const inputRef = useRef();
    
    return (
        <header>
            <h1>Breaking Bad</h1>
            <p>Explore series information</p>
            <nav>
                <ul>
                    <li><Link to='/' className= {searchText === 'characters by name' ? 'active-tab' : null}>Characters</Link></li>
                    <li><Link to ='/episodes' className={searchText === 'episodes by title or id' ? 'active-tab' : null}>Episodes</Link></li>
                </ul>
            </nav>
            <div className="search-box">
            <input 
            ref={inputRef}
            type="text"
            value ={search}
            onChange={(e)=>handleSearch(e.target.value)}
            placeholder = {`Search ${searchText}`}/>
            {search.length ? <button 
                onClick={()=>{
                    handleSearch('');
                    inputRef.current.focus();  
                } }
                className='clear-search'
                >
                X</button> : null}
                </div>
        </header>
    )
}

export default Header;
