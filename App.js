import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import ToggleSwitch from './ToggleSwitch';
import Footer from './Footer';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css'; // Import the modified App.css file

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [noteToEdit, setNoteToEdit] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
    setNoteToEdit(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDropdownSelect = (eventKey) => {
    // Handle navigation based on dropdown selection
    if (eventKey === 'add') {
      // Navigate to add note section or implement add note logic
      console.log('Navigating to add note section');
      // You can implement navigation or add note logic here
    } else if (eventKey === 'search') {
      // Navigate to search section or implement search logic
      console.log('Navigating to search section');
      // You can implement navigation or search logic here
    } else if (eventKey === 'view') {
      // Navigate to view notes section or implement view notes logic
      console.log('Navigating to view notes section');
      // You can implement navigation or view notes logic here
    }
  };

  const handleSearch = () => {
    // Handle search functionality
    // Filter notes based on searchTerm
    console.log('Search term:', searchTerm);
    // You can implement search logic here
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg">
        <Container>
          <Navbar.Brand href="#">Notes App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* NavDropdown with sections */}
              <NavDropdown title="Options" id="basic-nav-dropdown" onSelect={handleDropdownSelect}>
                <NavDropdown.Item eventKey="add">Add Note</NavDropdown.Item>
                <NavDropdown.Item eventKey="search">Search</NavDropdown.Item>
                <NavDropdown.Item eventKey="view">View Notes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <ToggleSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className={`py-3 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={8} lg={6}>
            {/* Search bar */}
            <div className="d-flex">
              <input
                type="text"
                className={`form-control ${isDarkMode ? 'dark-mode-input' : 'light-mode-input'}`}
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className={`btn btn-primary ml-2 ${isDarkMode ? 'dark-mode-button' : 'light-mode-button'}`} onClick={handleSearch}>Search</button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* Display notes */}
          {filteredNotes.map((note) => (
            <Col key={note.id} xs={12} sm={6} lg={4} className="mb-3">
              <Note note={note} onDelete={deleteNote} onEdit={setNoteToEdit} />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          {/* Note form */}
          <Col xs={12} md={8} lg={6}>
            <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
