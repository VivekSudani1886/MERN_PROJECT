import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './LAYOUT/layout';
import About from './ABOUT/about';
import Help from './HELP/help';
import Bill from './BILL/bill';
import BillHistory from './BillHistory/BillHistory';
import { Slide, ToastContainer } from 'react-toastify';
import Home from './HOME/home';
import Contact from './CONTACT/contact';


const App = () => {

    const [bills, setBills] = useState([
    
    ]);

    
    const addBill = (newBill) => {
        setBills([...bills, newBill]); 
    };

    // Function to handle bill edit
    const handleEditBill = (updatedBill, index) => {
        const updatedBills = [...bills];
        updatedBills[index] = updatedBill;
        setBills(updatedBills);
    };

  
    const handleDeleteBill = (index) => {
        const updatedBills = bills.filter((_, billIndex) => billIndex !== index);
        setBills(updatedBills);
    };

    return (


      <>
        <Routes>
            <Route  path='/' element={<Layout />} >
              <Route index path='/' element={<Home />} />
              <Route  path='/about' element={<About />} />
              <Route path='/help' element={<Help />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="/bill" element={<Bill addBill={addBill} />} /> 
              <Route path="/bill-history" element={<BillHistory bills={bills} onEdit={handleEditBill} onDelete={handleDeleteBill} />} />
            </Route>
        </Routes>
         <ToastContainer 
         position="top-center"
         autoClose={1000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
 
         />
      </>   
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);
