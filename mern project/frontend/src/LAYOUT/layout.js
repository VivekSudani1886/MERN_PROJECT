import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        
        const term = searchTerm.toLowerCase();

        if (term === "bill") {
            navigate("/bill");
            toast.success('Bill Page opened')
        } else if (term === "help") {
            navigate("/help");
            toast.success('Help Page opened', {
                
            });
        } else if (term === "bill history") {
            navigate("/bill-history");
            toast.success('History Page opened', {
               
            });
        } else if (term === "about") {
            navigate("/about");
            toast.success('About Page opened', {
               
            });
       
        } else if (term === "service") {
            navigate("/help");
            toast.success('Service Page opened', {
                
            });
        } else if (term === "contact") {
            navigate("/contact");
            toast.success('Contact Page opened', {
             
            });
        } else if (term === "home") {
            navigate("/");
            toast.success('Home Page opened', {           
            });
        } else {
            toast.error('Page not found', 
            );
        }

        setSearchTerm("");
    };

    return (
        <>
            
            <nav className="text-bg-dark navbar navbar-expand-lg fixed-top p-2 ">
                <div className="container-fluid">
                    <a className="text-light navbar-brand" style={{ cursor: "not-allowed" }}>
                        KuberSalesAgency
                    </a>
                    <button
                        className="navbar-toggler text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ><i class="bi bi-menu-up"></i>
                    </button>

                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link active text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/help">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/bill">Bill</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/bill-history">Bill History</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button className="btn btn-outline-primary text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <Outlet className="mt-5"/>

           
            <footer className="text-center text-bg-dark p-3">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h5 className="text-light">KuberSalesAgency</h5>
                            <p>Your trusted partner for sales and consulting services. We provide top-notch solutions tailored to your needs.</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-light">Home</Link></li>
                                <li><Link to="/about" className="text-light">About Us</Link></li>
                                <li><Link to="/help" className="text-light">Services</Link></li>
                                <li><Link to="/contact" className="text-light">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h5 className="text-uppercase">Contact Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="mailto:info@kubersalesagency.com" className="text-light">info@kubersalesagency.com</a></li>
                                <li><a href="tel:+91 9876543210" className="text-light">+91 9876543210</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-bg-dark text-center p-3">
                    © {new Date().getFullYear()} KuberSalesAgency. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Layout;
