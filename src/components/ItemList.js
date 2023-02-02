import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
import "../App.css";

export default function ItemList() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setitems(res.data));
  }, []);

  return (
    <div className="Accordion-List">
      {items.map((itm) => {
        return <Item itm={itm} key={itm.id} />;
      })}
    </div>
  );
}
