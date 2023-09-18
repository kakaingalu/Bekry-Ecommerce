import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withContext from '../../withContext';
// import PropTypes from 'prop-types';

const Login = ({ context }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    error: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value, error: "" });

  const login = async (e) => {
    e.preventDefault();

    const { username, password } = formData;
    if (!username || !password) {
      setFormData({ ...formData, error: "Fill all fields!" });
      return;
    }

    const response = await login({ username, password });

    if (response.status === 'success') {
      // Assuming the response contains a 'status' field indicating success
      // You may need to adjust this based on the actual response format
      // Call a function to handle successful login, e.g., set user context
      context.setUser(response.user); // Set user context here
    } else {
      setFormData({ ...formData, error: "Invalid Credentials" });
    }
  };

  // Add this handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login({
      username: formData.username,
      password: formData.password
    });
    // Assuming you have a setToken function in your context
    context.setToken(token);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Login</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Email: </label>
              <input
                className="input"
                type="email"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Password: </label>
              <input
                className="input"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            {formData.error && (
              <div className="has-text-danger">{formData.error}</div>
            )}
            <div className="field is-clearfix">
              <button className="button is-primary is-outlined is-pulled-right">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default withContext(Login);
