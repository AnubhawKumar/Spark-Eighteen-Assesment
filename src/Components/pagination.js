import React from "react";
import paging from "../utils/paging";

import '../assets/css/pagination.css';

const Pagination = (props) => {
  const {
    totalPage,
    onPageChange,
    activePageNumber,
    pageSize,
    onPageSizeChange,
  } = props;

  const pageSizeOptions = [2, 5, 8, 10, 15, 20, 50];

  return (
    <div className="pages_container">
      {paging(totalPage).map((page) => (
        <div
          key={page}
          className={`pages ${activePageNumber === +page ? "active_page":""}`}
          onClick={(event) => {
              // console.log(+event.target.textContent)
              onPageChange(+event.target.textContent)
            }}
        >
          {page}
        </div>
      ))}
      <div className="pages">
        <label>Page Size :</label>
        <select
          value={pageSize}
          onChange={(event) => onPageSizeChange(event.target.value)}
        >
            {
                pageSizeOptions.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>{pageSize}</option>
                )) 
            }
        </select>
      </div>
    </div>
  );
};

export default Pagination;
