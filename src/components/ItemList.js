import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import Pagination from "./Pagination";
import "../App.css";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemActive, setitemActive] = useState([]);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setItems(res.data);
        return res.data;
      })
      .then((res) => {
        //Created another empty array which will store the active status of all the individual items
        let itemsStatus = [];
        res.map((r) => {
          itemsStatus.push(false);
          setitemActive(itemsStatus); //Now, the itemactive array will have 10 false.
          return null;
        });
      });
  }, []);

  // Get current items
  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstitem = indexOfLastitem - itemsPerPage;
  const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="Accordion-List">
        {currentitems.map((itm) => {
          return (
            <Item
              itm={itm}
              id={itm.id}
              itemActive={itemActive}
              setitemActive={setitemActive}
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
