import { useState } from "react";

//destructuting props
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  // This function calls the function from parent component
  // and then give it the state it was set
  function handleSubmit(e) {
    // trigger build
    e.preventDefault();
    if (newItem == "") return;
    onSubmit(newItem);
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
