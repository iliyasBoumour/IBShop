import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const Index = () => {
  const [add, setAdd] = useState("");
  const addToCart = () => {
    add === "" ? setAdd("clicked") : setAdd("");
  };
  return (
    <Col className="mb-4">
      <div className="wrapper">
        <div className="myContainer">
          <Link to={`/products/test`}>
            <div
              className="top"
              style={{ background: `url(${"/images/2.png"})` }}
            ></div>
          </Link>
          <div className={`bottom ${add}`}>
            <div className="left">
              <Link to={`/products/test`}>
                <div className="details">
                  <h3>Chair</h3>
                  <p>£250</p>
                </div>
              </Link>
              <div onClick={addToCart} className="buy">
                <i className="material-icons">add_shopping_cart</i>
              </div>
            </div>
            <div className="right">
              <div className="done">
                <i className="material-icons">done</i>
              </div>
              <div className="details">
                <h3>Chair</h3>
                <p>Added to your cart</p>
              </div>
              <div className="remove" onClick={addToCart}>
                <i className="material-icons">clear</i>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <i className="material-icons">info_outline</i>
          </div>
          <div className="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>3000mm</td>
                <td>4000mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
              <tr>
                <th>Something</th>
                <th>Something</th>
              </tr>
              <tr>
                <td>200mm</td>
                <td>200mm</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Index;
