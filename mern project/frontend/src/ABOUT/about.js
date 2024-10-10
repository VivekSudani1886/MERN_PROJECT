
import React from 'react';

const About = () => {
    return (
        <div className="container text-center my-5">
            <h1>About Us</h1>
            <p>KubeSales Agency is dedicated to providing expert Kubernetes solutions for businesses of all sizes.</p>
            <p>Our team comprises experienced professionals who are passionate about Kubernetes and cloud technologies.</p>

            <h2>Our Mission</h2>
            <p>To empower organizations by delivering top-notch Kubernetes consulting services and solutions, enabling them to thrive in the cloud-native era.</p>

            <h2>Our Services</h2>
            <ul className="list-unstyled">
                <li>Kubernetes Consulting</li>
                <li>Cloud Strategy and Implementation</li>
                <li>Training and Support</li>
                <li>Custom Development Solutions</li>
            </ul>

            <h2>Meet Our Team</h2>
            <p>We are a diverse group of professionals committed to excellence and innovation.</p>
            <p>Our team members bring a wealth of experience in cloud architecture, DevOps, and software development.</p>

            <div className="my-4">
                <a href="/help" className="btn btn-secondary mx-2">Need Help?</a>
                <a href="/" className="btn btn-primary mx-2">Back to Home</a>
            </div>
        </div>
    );
};

export default About;
