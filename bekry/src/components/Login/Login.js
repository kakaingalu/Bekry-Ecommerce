import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import withContext from "../../withContext";

const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    error: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value, error: "" });

  const login = (e) => {
    e.preventDefault();

    const { username, password } = state;
    if (!username || !password) {
      setState({ ...state, error: "Fill all fields!" });
      return;
    }

    props.context.login(username, password).then((loggedIn) => {
      if (!loggedIn) {
        setState({ ...state, error: "Invalid Credentials" });
      } else {
        navigate("/products");
      }
    });
  };

  return !props.context.user ? (
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
              <input className="input" type="email" name="username" onChange={handleChange} />
            </div>
            <div className="field">
              <label className="label">Password: </label>
              <input className="input" type="password" name="password" onChange={handleChange} />
            </div>
            {state.error && <div className="has-text-danger">{state.error}</div>}
            <div className="field is-clearfix">
              <button className="button is-primary is-outlined is-pulled-right">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  ) : null;
};

export default withContext(Login);
