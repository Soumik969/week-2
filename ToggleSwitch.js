import React from 'react';
import { Form } from 'react-bootstrap';
import './App.css';
const ToggleSwitch = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <Form.Check
      type="switch"
      id="dark-mode-switch"
      label="Dark Mode"
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className="mt-2"
    />
  );
};

export default ToggleSwitch;

