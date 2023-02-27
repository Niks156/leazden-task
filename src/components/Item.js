import React, { useState } from "react";
import "../App.css";

export default function Item({ itm, setitemactive, itemactive, id }) {
  const [val, setval] = useState(itemactive[id - 1]);
  const handleid = () => {
    let newarray = itemactive;
    newarray[id - 1] = !newarray[id - 1];
    setitemactive(newarray);
    setval(newarray[id - 1]);
    console.log(itemactive[id - 1]);
  };
  return (
    <>
      <div className="Accordion-container">
        <div className="Accordion-title">
          <div>{itm.company.name}</div>
          <div>
            <h3>CONTACT</h3>
            {itm.name}
          </div>
          <div>
            <h3>CITY</h3>
            {itm.address.city}
          </div>
          <div>
            <h3>STREET</h3>
            {itm.address.street}
          </div>
          <button className="btn" onClick={handleid}>
            {val ? "Hide Details" : "Show Details"}
          </button>
        </div>
        {val && (
          <div className="Accordian-Content">
            <div className="acc-description">
              <h3>Description</h3>
              {itm.company.catchPhrase} {itm.company.bs}
            </div>
            <div className="acc-data">
              <div>
                <h3>Contact</h3>
                {itm.name}
              </div>
              <div>
                <h3>Address</h3>
                {itm.address.street} {itm.address.suite} {itm.address.city}{" "}
                {itm.address.zipcode}
              </div>
              <div>
                <h3>Website</h3>
                {itm.website}
              </div>
              <div>
                <h3>City</h3>
                {itm.address.city}
              </div>
              <div>
                <h3>Emails</h3>
                {itm.email}
              </div>
              <div>
                <h3>State</h3>
                {itm.address.street}
              </div>
              <div>
                <h3>Phone</h3>
                {itm.phone}
              </div>
              <div>
                <h3>Country</h3>
                India
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
