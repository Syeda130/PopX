
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/LoginPage.module.css'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    if (email && password) {
      console.log('Logging in with:', { email, password });
      navigate('/account'); 
    } else {
      alert('Please enter both email and password.');
    }
  };

  //  login button enable
  const isButtonDisabled = !email || !password;

  return (
    <div className={`page-content ${styles.loginPage}`}>
      <h1 className="page-title">Signin to your PopX account</h1>
      <p style={{marginTop: "-8px"}} className="page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input className='input-colors'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input className='input-colors'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
         <button style={{marginTop: "-8px"}}
               type="submit"
               className={`button ${isButtonDisabled ? 'button-disabled' : 'button-secondary'}`} 
               disabled={isButtonDisabled}
             >
               Login
             </button>
      </form>
    </div>
  );
}

export default LoginPage;