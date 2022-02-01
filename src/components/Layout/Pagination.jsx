const Pagination = ({pages,handlePageNumber,currentPage})=>{
    const pageNumbers = [];
    for(let i = 1;i<=pages ;i++){
        pageNumbers.push(i);
    }
    return(
        <ul className="pagination">{
            pages > 1 &&
            pageNumbers.map(number=> <li key={number}
                className={currentPage === number ? "active" : null}
                onClick={()=>{
                    handlePageNumber(number)
                }}
            >{number}</li>)
         }</ul>
    )
}

export default Pagination;