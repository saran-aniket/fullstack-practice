import React from "react";

function Pagination({pageNo, handlePreviousPageFn, handleNextPageFn}) {
    return (
        <div className="flex justify-center items-center gap-5 py-2">
            <i
                className="fa-solid fa-chevron-left hover:bg-gray-300"
                onClick={handlePreviousPageFn}
            ></i>
            <p>{pageNo}</p>
            <i className="fa-solid fa-chevron-right hover:bg-gray-300" onClick={handleNextPageFn}></i>
        </div>
    );
}

export default Pagination;
