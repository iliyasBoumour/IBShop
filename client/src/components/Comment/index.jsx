import React from "react";
import { Col } from "reactstrap";
import Stars from "../Stars";
import "./comment.css";

const index = () => {
  return (
    <Col className="d-flex mt-5" sm={12}>
      <img
        src="https://flatlogic-ecommerce-backend.herokuapp.com/images/feedback/person1.jpg"
        className="avatar"
      />
      <div className="d-flex flex-column justify-content-between align-items-start">
        <div className="d-flex justify-content-between align-items-center name-date">
          <h6 className="fw-bold mb-0 ">John Smith</h6>
          <p className="text-muted mb-0">2021-04-09</p>
        </div>
        <Stars rating={5} />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
          ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
          ultricies aliquam.
        </p>
      </div>
    </Col>
  );
};

export default index;
