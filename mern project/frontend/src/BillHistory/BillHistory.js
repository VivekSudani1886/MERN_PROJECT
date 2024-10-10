import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaShoppingCart, FaUser, FaEdit, FaTrashAlt, FaSave, FaRupeeSign } from 'react-icons/fa'; 
import { Slide, toast } from 'react-toastify'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './BillHistory.css'; 

const BillHistory = () => {
    const [bills, setBills] = useState([]);  
    const [searchTerm, setSearchTerm] = useState(''); 
    const [editableBillIndex, setEditableBillIndex] = useState(null);
    const [editedBill, setEditedBill] = useState(null);

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bills'); 
            setBills(response.data);
        } catch (error) {
            console.error('Error fetching bills:', error);
            toast.error('You Backend is not Connected yet...');
        }
    };

  
    const handleEditClick = (bill, index) => {
        setEditableBillIndex(index);
        setEditedBill({ ...bill });
    };

   
    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/bills/${editedBill._id}`, editedBill);
            toast.success('🎉 Bill edited successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide,
            });
          
            setBills((prevBills) =>
                prevBills.map((bill, index) => (index === editableBillIndex ? response.data : bill))
            );
            setEditableBillIndex(null);
            setEditedBill(null);
        } catch (error) {
            console.error('Error editing bill:', error);
            toast.error('Error saving bill. Please try again.');
        }
    };

   
    const handleDeleteClick = async (index) => {
        const billToDelete = bills[index];
        try {
            await axios.delete(`http://localhost:5000/api/bills/${billToDelete._id}`);
            toast.success('Bill deleted successfully!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
            
            setBills((prevBills) => prevBills.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting bill:', error);
            toast.error('Error deleting bill. Please try again.');
        }
    };

    const handleInputChange = (itemIndex, field, value) => {
        const updatedItems = [...editedBill.items];
        updatedItems[itemIndex][field] = field === 'quantity' || field === 'price' ? parseFloat(value) : value;
        setEditedBill({ ...editedBill, items: updatedItems });
    };


    const calculateTotal = (items) => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

   
    const filteredBills = bills.filter(bill => 
        bill.billHolder.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-5">
         
           

            <h2 className="text-center mb-4 p-2" style={{ fontWeight: '600', color: '#333' }}>Bill History</h2>

           
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by Bill Holder Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="text-center mb-4">
                <Link to="/Bill" className="btn btn-primary">Add New Bill</Link>
            </div>
            {filteredBills.length === 0 ? (
                <p className="text-center">No bills found.</p>
            ) : (
                <div className="row">
                    {filteredBills.map((bill, index) => {
                        const isEditing = index === editableBillIndex;
                        const billTotal = calculateTotal(isEditing ? editedBill.items : bill.items);
                        return (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="card shadow-sm rounded p-3 bg-light border-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-dark d-flex align-items-center">
                                            <FaUser className="me-2" /> 
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={editedBill.billHolder}
                                                    onChange={(e) => setEditedBill({ ...editedBill, billHolder: e.target.value })}
                                                    className="form-control"
                                                />
                                            ) : (
                                                bill.billHolder
                                            )}
                                        </h5>
                                        <ul className="list-group list-group-flush">
                                            {isEditing ? (
                                                editedBill.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <FaShoppingCart className="me-2" />
                                                            <input
                                                                type="text"
                                                                value={item.productName}
                                                                onChange={(e) => handleInputChange(itemIndex, 'productName', e.target.value)}
                                                                className="form-control mb-2"
                                                                placeholder="Product Name"
                                                            />
                                                            <small className="text-muted">
                                                                Quantity:
                                                                <input
                                                                    type="number"
                                                                    min="1"
                                                                    value={item.quantity}
                                                                    onChange={(e) => handleInputChange(itemIndex, 'quantity', e.target.value)}
                                                                    className="form-control d-inline-block w-auto"
                                                                    style={{ width: '60px', marginLeft: '10px' }}
                                                                />
                                                            </small>
                                                        </div>
                                                        <div className="text-right">
                                                            <small className="d-block text-muted">
                                                                <FaRupeeSign className="me-2" />
                                                                Price:
                                                                <input
                                                                    type="number"
                                                                    value={item.price}
                                                                    onChange={(e) => handleInputChange(itemIndex, 'price', e.target.value)}
                                                                    className="form-control"
                                                                />
                                                            </small>
                                                            <strong>
                                                                Total: ₹{(item.price * item.quantity).toFixed(2)}
                                                            </strong>
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                bill.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="list-group-item d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <FaShoppingCart className="me-2" />
                                                            {item.productName} (Qty: {item.quantity})
                                                        </div>
                                                        <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                        <div className="mt-3">
                                            <h6 className="text-primary">Total Amount: ₹{billTotal.toFixed(2)}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            {isEditing ? (
                                                <button className="btn btn-success" onClick={handleSaveClick}><FaSave /> Save</button>
                                            ) : (
                                                <button className="btn btn-warning" onClick={() => handleEditClick(bill, index)}><FaEdit /> Edit</button>
                                            )}
                                            <button className="btn btn-danger" onClick={() => handleDeleteClick(index)}><FaTrashAlt /> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BillHistory;
