import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';
const Note = ({ note, onDelete, onEdit }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="danger" onClick={() => onDelete(note.id)} className="mr-2">
          Delete
        </Button>
        <Button variant="primary" onClick={() => onEdit(note)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Note;
