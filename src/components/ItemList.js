import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import Pagination from "./Pagination";
import "../App.css";

export default function ItemList() {
  const [items, setitems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemactive, setitemactive] = useState(false);
  const [currentactiveid, setcurrentactiveid] = useState(null);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setitems(res.data));
  }, []);

  // Get current items
  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastitem - itemsPerPage;
  const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setid = (c_id) => {
    setcurrentactiveid(c_id);
  };

  return (
    <>
      <div className="Accordion-List">
        {currentitems.map((itm) => {
          return (
            <Item
              itm={itm}
              setitemactive={setitemactive}
              itemactive={itemactive}
              currentactiveid = {currentactiveid}
              id = {itm.id}
              setid = {setid}
              key={itm.id}
            />
          );
        })}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalitems={items.length}
        paginate={paginate}
      />
    </>
  );
}
