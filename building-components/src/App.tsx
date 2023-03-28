import ListGroup from "./components/ListGroup";

const App = () => {
  let cities = ["Cotonou", "Porto-Novo", "Abomey", "Calavi", "Djougou", "Parakou", "Dassa"];

  const handleSelectCity = (city: string) => {
    console.log(city);
  };

  return (
    <ListGroup
      cities={cities}
      heading="Cities in Benin"
      onSelectCity={handleSelectCity}
    />
  );
};

export default App;
