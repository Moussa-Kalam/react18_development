import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilities", "Entertainment"];

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
    <div className="m-5">
      <div className="mb-5">
        <ExpenseForm />
      </div>

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
