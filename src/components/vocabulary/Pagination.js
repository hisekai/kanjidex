import React from "react";

export const Pagination = ({
  decksPerPage,
  totalDecks,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDecks / decksPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={
                  currentPage === number
                    ? "button is-primary pagination-link"
                    : "button is-primary is-outlined pagination-link"
                }
                aria-label={`Got to page ${number}`}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};
