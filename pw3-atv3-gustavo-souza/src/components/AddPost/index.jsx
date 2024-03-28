import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <Card>
      <Card.Body>
        <h3>Add Post</h3>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disabled input</Form.Label>
            <Form.Control
              type="text"
              placeholder="body"
              name="body"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </Form.Group>
          <Button type="submit" variant="success">
            Add
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddPost;
