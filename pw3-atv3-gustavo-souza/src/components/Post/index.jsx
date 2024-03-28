import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Post = ({ id, body, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button onClick={handleDelete} variant="danger">
          delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
