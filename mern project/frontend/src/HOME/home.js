

import React from 'react';
import Help from '../HELP/help';
import { Link } from 'react-router-dom';


const KuberSalesAgency = () => {
  return (
    <div style={styles.kuberContainer} className=''>
      <h2>Kuber Sales Agency</h2>
      <p>
        Kuber Sales Agency is a leading wholesale agency known for distributing high-quality products like 
        <strong> Vimal Sopari</strong>, along with a variety of other consumer goods. We specialize in providing 
        competitive prices to retailers and businesses across the region, ensuring timely delivery and excellent customer service.
      </p>
      <p>
        Our product range includes popular items such as:
      </p>
      <ul type="none" style={styles.productList} className='text-center '>
        <b><li >Vimal Sopari</li>
        <li>Pan Masala</li>
        <li>Flavored Tobacco</li>
        <li>Snacks and Beverages</li>
        <li>Consumer Packaged Goods</li></b>
      </ul>
      <p>
        As a trusted distributor, we pride ourselves on maintaining long-term relationships with our customers and vendors. 
        Whether you're a small retailer or a large business, Kuber Sales Agency is your go-to source for quality products at 
        wholesale prices.
      </p>

      <b>
            <p>
               You Can Get Your Bill at BILL-History section <br/>
                You can Create your bill IN Bill Section  <br/>
                You can update , search and delete the bill <br/>
                <span className='text-bg-danger'>Remember that your bill saved in our dataBase.</span>
            </p>
      </b>
      <Link to="/help" className="btn btn-success">HELP</Link>
    </div>
  );
};


const Home = () => {
  return (
    <div style={styles.homeContainer} className='mt-5'>
      
     
      <KuberSalesAgency />
    </div>
  );
};

const styles = {
  homeContainer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f8f9fa',
  },
  kuberContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    marginTop: '20px',
  },
  productList: {
    textAlign: 'left',
    margin: '10px 0',
  },
  contactButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
