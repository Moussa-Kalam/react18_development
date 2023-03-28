import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Welcome to my page!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click here</Button>
    </>
  );
};

export default App;
