import React from 'react';

function CustomModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Form Submitted Successfully!</h2>
        <p>Thank you for submitting your application for the Mars Visit. We will review it shortly.</p>
        <button className="btn btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CustomModal;
