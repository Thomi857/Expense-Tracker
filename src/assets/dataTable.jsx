import React from "react";

const Datatable = ({ filteredData, handleDelete }) => {  
    return(
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Cost</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.expense}</td>
                        <td>{item.description}</td>
                        <td>{item.category}</td>
                        <td>{item.cost}</td>
                        <td>{item.date}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Datatable;


