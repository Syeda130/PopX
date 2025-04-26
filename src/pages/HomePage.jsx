
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css'; 

function HomePage() {
  return (
    <div className={`page-content ${styles.homePage}`}>
    
      <div className="button-container-bottom">
         <h1 className="page-title">Welcome to PopX</h1>
         <p className="page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <Link to="/signup" className="button button-primary">
          Create Account
        </Link>
        <Link to="/login" className="button button-secondary">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

export default HomePage;