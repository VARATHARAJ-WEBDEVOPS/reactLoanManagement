import React, { useState } from "react";
import './create.css'
import Navbar from '../navbar/navbar';
import axios from 'axios';

const Create = () => {

    const initialFormData = {
        name: '',
        phoneNumber: '',
        address: '',
        provideDate: '',
        dueMonth: '',
        amount: '',
        interest: '',
        profit: "",
        balance: "",
        amountPerMonth: "",
        balanceMonth: "",
        futureAmount: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleReset = () => {
        setFormData(initialFormData);
    };

    const calculate = () => {
        formData.profit = formData.amount * formData.interest * formData.dueMonth / 100;
        let profit = Math.floor(parseFloat(formData.profit));
        let amount = Math.floor(parseFloat(formData.amount));
        formData.balance = profit + amount;
        formData.amountPerMonth = Math.floor(formData.balance / formData.dueMonth);
        formData.balanceMonth = formData.dueMonth;
        formData.futureAmount = Math.floor(formData.balance);
    }

    const handleSave = async () => {
        calculate();
        const response = await axios.post('http://localhost:3001/items', formData); // Replace with your API endpoint
        console.log('Saved:', response.data);
        handleReset();
    };

    return (
        <div className="create">
            <Navbar />
            <div className="createContainer">
                <h1>Create payee</h1>
                <input type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange} />
                <input type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange} />
                <input type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange} />
                <input type="text"
                    name="provideDate"
                    placeholder="Provide Date"
                    value={formData.provideDate}
                    onChange={handleInputChange} />

                <input type="number"
                    placeholder="Due Month"
                    name="dueMonth"
                    value={formData.dueMonth}
                    onChange={handleInputChange} />
                <input type="number"
                    placeholder="Amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange} />
                <input type="number"
                    placeholder="Interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange} />
                <div className="datePicker">
                    Provide Date
                    <i class="bi bi-calendar-check"></i>
                </div>
                <div className="buttonContainer">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div >
    );
}

export default Create;