import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import './SignUpPage.css'; // Import your CSS styles

export default function SignUpPage() {
  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password') {
      const result = zxcvbn(value);
      setPasswordStrength(result.score);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Add your sign-up logic here
    console.log('Form submitted:', formData);

    

    if (formData.password != formData.confirmPassword){
        alert('Please write the same password')
    }
    const response: any = await fetch('http://localhost:5001/api/createUser', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    const resJson = response.json()
    if (resJson.msg == 'Missing fields'){
      alert("All fields must be filled out");
    }else if (resJson.msg == 'User exists'){
      alert("User already taken")
    }else if (resJson.success == false){
      alert("Error creating account")
    }else {
      alert('User Created! Please log in with the credentials')
      navigator('/login')
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className={`password-strength strength-${passwordStrength}`}>
            {passwordStrength === 0 && 'Weak'}
            {passwordStrength === 1 && 'Fair'}
            {passwordStrength === 2 && 'Good'}
            {passwordStrength === 3 && 'Strong'}
            {passwordStrength === 4 && 'Very Strong'}
          </div>
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

