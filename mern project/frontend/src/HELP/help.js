
import React from 'react';

const Help = () => {
    return (
        <div className="container text-center my-5  pt-5">
            <h1>Help Center</h1>
            <p>If you need assistance, we are here to help!</p>
            
            <h2>Contact Us</h2>
            <p>You can reach our support team through the following methods:</p>
            <ul className="list-unstyled">
                <li>
                    <strong>Email:</strong> <a href="mailto:info@kubersalesagency.com">info@kubersalesagency.com</a>
                </li>
                <li>
                    <strong>Phone:</strong> <a href="tel:+1234567890">+91 9328084334</a>
                </li>
            </ul>

            <h2>Frequently Asked Questions (FAQs)</h2>
            <ul className="list-unstyled">
                <li><strong>Q:</strong> What services do you offer?<br /><strong>A:</strong> We offer Kubernetes consulting, cloud strategy implementation, training, and custom development solutions.</li>
                <li><strong>Q:</strong> How can I get a quote for your services?<br /><strong>A:</strong> You can contact us via email or phone, and we will get back to you with a quote.</li>
                <li><strong>Q:</strong> Do you offer training sessions?<br /><strong>A:</strong> Yes, we provide various training sessions tailored to your team’s needs.</li>
            </ul>

            <h2>Support Hours</h2>
            <p>Our support team is available:</p>
            <ul className="list-unstyled">
                <li>Monday to Saturday: 8:30 AM - 8:30 PM (IST)</li>
                <li> Sunday: 8:30 AM - 12:30 PM (IST) </li>
            </ul>

            <div className="my-4">
                <a href="/" className="btn btn-primary mx-2">Back to Home</a>
                <a href="/about" className="btn btn-secondary mx-2">Learn More About Us</a>
            </div>
        </div>
    );
};

export default Help;
