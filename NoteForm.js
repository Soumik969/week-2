import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css';
const NoteForm = ({ addNote, editNote, noteToEdit }) => {
  const [note, setNote] = useState(noteToEdit || { title: '', content: '' });

  useEffect(() => {
    setNote(noteToEdit || { title: '', content: '' });
  }, [noteToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      editNote(note);
    } else {
      addNote({
        ...note,
        id: Date.now(),
      });
    }
    setNote({ title: '', content: '' });
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-white rounded">
      <Form.Group controlId="formNoteTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group controlId="formNoteContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Enter content"
          rows={3}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        {noteToEdit ? 'Update Note' : 'Add Note'}
      </Button>
    </Form>
  );
};

export default NoteForm;
