const fetchFunction = async (endpoint)=>{
        try{
            const res = await fetch(`https://www.breakingbadapi.com/api/${endpoint}`);
            const data = await res.json();
            console.log(data);
            return data;
        }catch(err){
            return [];
        }
    }

export default fetchFunction;
