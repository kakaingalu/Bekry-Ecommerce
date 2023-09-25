import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import withContext from '../../withContext';
import Footer from "../Footer/Footer";

const initState = {
  name: "",
  price: "",
  stock: "",
  shortDesc: "",
  description: "",
  flash: null
};

function AddProduct(props) {
  const [state, setState] = useState(initState);

  const save = async (e) => {
    e.preventDefault();
    const { name, price, stock, shortDesc, description } = state;

    if (name && price) {
      const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

      await axios.post(
        'http://localhost:3001/products',
        { id, name, price, stock, shortDesc, description },
      )

      props.context.addProduct(
        {
          name,
          price,
          shortDesc,
          description,
          stock: stock || 0
        },
        () => setState(initState)
      );
      setState({ flash: { status: 'is-success', msg: 'Product created successfully' } });

    } else {
      setState({ flash: { status: 'is-danger', msg: 'Please enter name and price' } });
    }
  };

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value, error: "" });

  const { name, price, stock, shortDesc, description } = state;
  const { user } = props.context;

  const navigate = useNavigate();

  return !(user && user.accessLevel < 1) ? (
    navigate('/')
  ) : (
    <>
      <div className="hero is-primary ">
        <div className="hero-body container">
          <h4 className="title">Add Product</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={save}>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Product Name: </label>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Price: </label>
              <input
                className="input"
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Available in Stock: </label>
              <input
                className="input"
                type="number"
                name="stock"
                value={stock}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Short Description: </label>
              <input
                className="input"
                type="text"
                name="shortDesc"
                value={shortDesc}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Description: </label>
              <textarea
                className="textarea"
                type="text"
                rows="2"
                style={{ resize: "none" }}
                name="description"
                value={description}
                onChange={handleChange}
              />
            </div>
            {state.flash && (
              <div className={`notification ${state.flash.status}`}>
                {state.flash.msg}
              </div>
            )}
            <div className="field is-clearfix">
              <button
                className="button is-primary is-outlined is-pulled-right"
                type="submit"
                onClick={save}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer /> 
    </>
  );
}

export default withContext(AddProduct);
