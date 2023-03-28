import { useState } from "react";

const ListGroup = () => {
  let cities = ["Cotonou", "Porto-Novo", "Abomey", "Calavi", "Djougou"];
  //   cities = [];  Used for conditional rendering

  // Manage state
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of cities</h1>
      {cities.length === 0 && <p>No cities found in the list!</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
