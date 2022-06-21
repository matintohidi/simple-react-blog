import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ page , setPage , pageCount , setSearchParams , ordering , next , prev }) => {

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
        setSearchParams({ page: selected + 1 , ordering: ordering });
    }

    return (
        <ReactPaginate
            initialPage={page === undefined ? 0 : page - 1}
            breakLabel="..."
            breakClassName="mx-2 hidden md:block"
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            containerClassName="flex justify-center items-center mb-16 gap-x-3"
            pageLinkClassName="px-4 py-3 rounded ring-1 ring-mainColor text-sm text-mainColor cursor-pointer hidden md:block"
            previousLinkClassName={`text-center px-3 py-2 md:px-4 md:py-3 rounded text-sm ring-1 ring-mainColor text-mainColor hover:bg-mainColor hover:text-white hover:ring-0 transition duration-75 ${prev === null ? 'hidden' : ''}`}
            nextLinkClassName={`text-center px-3 py-2 md:px-4 md:py-3 rounded text-sm ring-1 ring-mainColor text-mainColor hover:bg-mainColor hover:text-white hover:ring-0 transition duration-75 ${next === null ? 'hidden' : ''}`}
            activeLinkClassName="bg-mainColor text-white"
            disableInitialCallback
        />
    )
}

export default Pagination;