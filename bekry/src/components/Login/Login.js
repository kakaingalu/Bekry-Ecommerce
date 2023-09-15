import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withContext from '../../withContext';

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

    const loggedIn = await context.login(username, password);

    if (!loggedIn) {
      setFormData({ ...formData, error: "Invalid Credentials" });
    }
  };

  const navigate = useNavigate();

  return !context.user ? (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Login</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={login}>
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
  ) : (
    navigate("/shop")
  );
};

export default withContext(Login);
