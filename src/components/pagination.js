import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <div className="pagination-wrapper">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default Pagination;
