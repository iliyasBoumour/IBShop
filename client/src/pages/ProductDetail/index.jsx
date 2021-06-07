import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./productDetail.css";
import Stars from "../../components/Stars";
import Comment from "../../components/Comment";
import Modal from "../../components/LeaveFeedback";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const Index = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Row className="mt-nav">
        <div className="links">
          <Link> Products </Link> {">"}
          <Link> Category </Link> {"> Chair"}
        </div>
      </Row>
      <Row className="my-5">
        <Col lg={6}>
          <div className="mr-3  imageContainer">
            <img src="/images/2.png" alt="Wristwatch by Ted Baker London" />
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-between px-3" lg={6}>
          <div
            className="d-flex flex-column justify-content-between"
            style={{ minHeight: "320px" }}
          >
            <h6 className="text-muted">Category</h6>
            <h4 className="fw-bold">Chair</h4>
            <Stars rating={4.5}>
              <p className="mb-0 gold fw-bold h5">6 Reviews</p>
            </Stars>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              odit id amet sit dolore animi, quidem reprehenderit doloremque
            </p>
            <div className="d-flex  flex-wrap car-cont">
              <div className="d-flex  flex-column justify-content-between car">
                <h6 class="fw-bold text-muted text-uppercase">Color</h6>
                <Form.Control
                  as="select"
                  className="select "
                  style={{ cursor: "pointer" }}
                  custom
                >
                  <option value="test">test</option>
                  <option value="test">test1</option>
                  <option value="test">test2</option>
                </Form.Control>
              </div>
              <div className="d-flex flex-column justify-content-between car">
                <h6 className="fw-bold text-muted text-uppercase">Quantity</h6>
                <div className="d-flex align-items-center number-items">
                  <button
                    type="button"
                    className="bg-transparent border-0 p-1 fw-bold"
                  >
                    -
                  </button>
                  <p className="fw-bold mb-0">1</p>
                  <button
                    type="button"
                    className="bg-transparent border-0 p-1 fw-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-between car">
                <h6 class="fw-bold text-muted text-uppercase">Price</h6>
                <h6 class="fw-bold">150$</h6>
              </div>
            </div>
          </div>
          <div className="d-flex buttons">
            <Button
              className="flex-fill text-uppercase fw-bold my-btn"
              id="first-btn"
              variant="outline-primary"
            >
              Add To Cart
            </Button>
            <Button
              className="flex-fill text-uppercase fw-bold my-btn"
              variant="outline-primary"
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="reviews-container py-5">
        <Col className>
          <div className="d-flex justify-content-between">
            <h4 className="fw-bold">Reviews:</h4>
            <Button
              id="feedback-btn"
              className="bg-transparent border-0 fw-bold p-0 "
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              + Leave Feedback
            </Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Col>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Row>
    </Container>
  );
};

export default Index;
