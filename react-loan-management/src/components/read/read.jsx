import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import axios from 'axios';
import './read.css'

const Read = () => {

    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const total = (2 + 2);
        console.log(total);
        fetchData(); // Fetch initial data on component mount
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/items/'); // Replace with your API endpoint
            setDataList(response.data); // Assuming your data is an array
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/items/${id}`); // Replace with your API endpoint
            console.log('Item deleted');
            fetchData(); // Refresh data after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div className="read">
            <Navbar />
            <div className="readContainer">
                <h1>Read</h1>
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Persional Detail</th>
                                <th>Time</th>
                                <th>Amt & Interest</th>
                                <th>Balance</th>
                                <th>Future Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name} <br />
                                        {item.phoneNumber}  <br />
                                        {item.address}<i class="bi bi-calendar-check"></i>
                                    </td>
                                    <td>{item.provideDate} <br />
                                        Due {item.dueMonth} Months
                                    </td>
                                    <td>{item.amount} <br />
                                        {item.interest} % <br />
                                        {item.profit}
                                    </td>
                                    <td>{item.balance} <br />
                                        ( {item.balanceMonth} ) Months</td>
                                    <td>{item.amountPerMonth} <br />
                                        X {item.dueMonth} <br />
                                        {item.futureAmount}</td>
                                    <td>
                                        <button>Update</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Read;