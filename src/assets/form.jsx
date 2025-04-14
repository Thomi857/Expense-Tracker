import React from "react";

const FormData = ({
    expense, setExpense, 
    description, setDescription, 
    category, setCategory, 
    cost, setCost,
    date, setDate, 
    handleSubmit}
) => {
    return(
          <form className="form" onSubmit={handleSubmit}>
               <input
                 type="text"
                 placeholder="Expense"
                 value={expense}
                 onChange={(e) => setExpense(e.target.value)}
               />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Add Expense</button>
         </form>
      
    )
}

export default FormData;

