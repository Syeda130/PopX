
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/SignUpPage.module.css'; 

function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState(null); 
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (fullName && phone && email && password && isAgency !== null) {
      console.log('Signing up with:', { fullName, phone, email, password, company, isAgency });
      navigate('/account');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const requiredStar = <span className="required-star">*</span>;

  return (
    <div className={`page-content ${styles.signUpPage}`}>
      <h1 className="page-title">Create your PopX account</h1>


      <form onSubmit={handleSignUp} className={styles.signUpForm}>
        <div className="input-group">
          <label htmlFor="fullName">Full Name{requiredStar}</label>
          <input className='input-color'
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Marry Doe"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone number{requiredStar}</label>
          <input className='input-color'
            type="tel" 
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Marry Doe" 
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email address{requiredStar}</label>
          <input className='input-color'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Marry Doe"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password{requiredStar}</label>
          <input className='input-color'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Marry Doe"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="company">Company name</label> 
          <input className='input-color'
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Marry Doe"
          />
        </div>

        <div className={styles.radioGroup}>
          <p className={styles.radioLabel}>Are you an Agency?{requiredStar}</p>
          <div className={styles.radioOptions}>
            <label className={styles.radioOption}>
              <input className='input-color'
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                required
              />
              <span>Yes</span>
            </label>
            <label className={styles.radioOption}>
              <input className='input-color'
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                required
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Button Container */}
        <div className={`button-container-bottom ${styles.signupButtonContainer}`}>
             <button type="submit" className="button button-primary">
               Create Account
             </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;