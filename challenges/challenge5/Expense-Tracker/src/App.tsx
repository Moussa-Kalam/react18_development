import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "description1",
      amount: 12,
      category: "Utilities",
    },
    {
      id: 2,
      description: "description2",
      amount: 12,
      category: "Utilities",
    },
    {
      id: 3,
      description: "description3",
      amount: 12,
      category: "Utilities",
    },
    {
      id: 4,
      description: "description4",
      amount: 12,
      category: "Utilities",
    },
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
}

export default App;
