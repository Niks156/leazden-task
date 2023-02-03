import React from "react";

export default function Pagination({ itemsPerPage, totalitems, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pages-flex">
        {pageNumbers.map((number) => (
          <li key={number} className="pages-flex">
            <a onClick={() => paginate(number)} href="/#" className="pages btn">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
