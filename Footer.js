import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'; // Import the modified App.css file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <p className="mb-0 text-center">© {new Date().getFullYear()} Notes App. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
