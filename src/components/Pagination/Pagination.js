

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <div className="text-center">
            <p>Page{currentPage} out of {pageNumbers.length}</p>
            <nav>
                <ul className='pagination flex justify-center'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item m-[2px]'>
                            <div className="mt-[10%] flex justify-center md:justify-start">
                                <button onClick={() => paginate(number)} class=" fortnite-btn flex items-center justify-center h-[30px] w-10 md:w-100">
                                    <span class="fortnite-btn-inner pl-2 pr-2 truncate">{number}</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Pagination