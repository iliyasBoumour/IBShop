import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./liveFeedback.css";

const index = (props) => {
  return (
    <Modal
      {...props}
      centered
      backdrop="static"
      keyboard={false}
      dialogClassName="modal-leave-feed"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Leave Feedback</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
          consequuntur fugiat praesentium officia nisi maiores vel doloremque
          rerum ex, itaque enim. Porro veniam earum ut consequuntur aspernatur?
          Quibusdam, iusto nam?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="fw-bold my-btn"
          variant="outline-primary"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default index;
