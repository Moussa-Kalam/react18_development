import { useState } from "react";

// Pass data via props (immutable)
interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (city: string) => void;
}

const ListGroup = ({ cities, heading, onSelectCity }: Props) => {
  // Manage state (mutable)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
              onSelectCity(city);
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
