import Button from "./components/Button";

const App = () => {
  return (
    <Button onClick={() => console.log("Submission successful!")}>
      Submit
    </Button>
  );
};

export default App;
