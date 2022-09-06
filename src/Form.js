import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class Form1 extends React.Component {

  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Book To Favorites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.addBook}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter a book name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter a description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                placeholder="book status"
              />
              
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Book Now!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Form1;