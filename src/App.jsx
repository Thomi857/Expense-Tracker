import { useState } from 'react';
import './App.css';
import SearchInput from './assets/searchingBar.jsx';
import Formdata from './assets/form.jsx';
import Datatable from './assets/dataTable.jsx';


function App() {
  // State variables for form data
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  // State for storing the list of expenses
  const [data, setData] = useState([]);



  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (expense === "" || description === "" || category === "" || cost === "" || date === "") {
      alert("Please fill in all fields");
    } else {
      // Add new expense to the list
      const newData = {
        expense,
        description,
        category,
        cost,
        date
      };

      setData((prevData) => [...prevData, newData]);

      // Optionally, reset the form
      setExpense("");
      setDescription("");
      setCategory("");
      setCost("");
      setDate("");
    }
  };

        // State for search term
        const [searchTerm, setSearchTerm] = useState("");

        // Handle search term input
        const handleSearch = (event) => {
            setSearchTerm(event.target.value);
          }; 


  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.expense.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cost.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete of an expense
  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header>
        <h1>Expense Tracker</h1>
        <p>Track your expenses easily and efficiently to manage your finances better and stay organized.</p>
      </header>
      <div className="UNIVERSAL">
    
        <div className="Bigform">
            <Formdata
              expense={expense}
              setExpense={setExpense}
              description={description}
              setDescription={setDescription}
              category={category}
              setCategory={setCategory}
              cost={cost}
              setCost={setCost}
              date={date}
              setDate={setDate}
              handleSubmit={handleSubmit}
            />
      </div>
      <div className="tableverse">

      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />

      <Datatable filteredData={filteredData} handleDelete={handleDelete} />

      </div>
      </div>
    </div>
  );
}

export default App;
