import React, { useState } from 'react';
import { FaDollarSign, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Slide, toast } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios'; 
import 'react-toastify/dist/ReactToastify.css';
import './Bill.css';

const Bill = () => {
    const [billHolder, setBillHolder] = useState('');
    const [items, setItems] = useState([{ productName: '', quantity: 0, price: 0 }]);

    const handleInputChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = field === 'quantity' || field === 'price' ? parseFloat(value) : value;
        setItems(updatedItems);
    };

    const addItem = () => {
        setItems([...items, { productName: '', quantity: 0, price: 0 }]);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (billHolder.trim() === '' || items.some(item => item.productName.trim() === '' || item.quantity <= 0 || item.price <= 0)) {
            toast.error('Please complete the bill before submitting.', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            return;
        }

        const newBill = { billHolder, items };
        try {
            
            await axios.post('http://localhost:5000/api/bills', newBill);
            toast.success('🎉 Bill generated successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
            setBillHolder('');
            setItems([{ productName: '', quantity: 0, price: 0 }]);
        } catch (error) {
            toast.error('Backend Sever Not started yet!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        }
    };

    return (
    <>
       

        <div className="container my-5">

            
            <h2 className="text-center mb-4 pt-5" style={{ fontWeight: '600', color: '#333' }}>Create a New Bill</h2>
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                <div className="mb-3">
                    <label className="form-label"><FaUser className="me-2" /> Bill Holder Name:</label>
                    <input
                        type="text"
                        value={billHolder}
                        onChange={(e) => setBillHolder(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                {items.map((item, index) => (
                    <div key={index} className="mb-3 border p-3 rounded bg-white">
                        <h5 className="text-muted">Item {index + 1}</h5>
                        <div className="mb-2">
                            <label className="form-label"><FaShoppingCart className="me-2" /> Product Name:</label>
                            <input
                                type="text"
                                value={item.productName}
                                onChange={(e) => handleInputChange(index, 'productName', e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Price (₹):</label>
                            <input
                                type="number"
                                min="0"
                                value={item.price}
                                onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Total Amount (₹):</label>
                            <input
                                type="text"
                                value={(item.price * item.quantity).toFixed(2)}
                                className="form-control"
                                readOnly
                            />
                        </div>
                    </div>
                ))}
                <div className="text-center mb-3">
                    <button type="button" className="btn btn-outline-secondary" onClick={addItem}>Add Item</button>
                </div>
                <button type="submit" className="btn btn-primary d-block mx-auto">Create Bill</button>
                <div className="mt-3 text-center">
                    <Link to="/bill-history" className="btn btn-success">View Bill History</Link>
                </div>
            </form>
        </div>


  

        </>
    );
};

export default Bill;
