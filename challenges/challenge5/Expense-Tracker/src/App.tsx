import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectCategory] = useState("");

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
      category: "Groceries",
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
      category: "Entertainment",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
