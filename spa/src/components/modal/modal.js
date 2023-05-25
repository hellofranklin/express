import React, { useState } from "react";
import "./modal.css";

const Modal = ({ closeModal , launchEditorClickHandler}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the title (e.g., pass it to another component or perform an action)
    // Close the modal
    closeModal();
    launchEditorClickHandler(title);
  };

  return (
    <div className="modal-container">
      <div className="modal">
      <button className="modal-close" onClick={closeModal}>
        &times;
      </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Enter Form Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="launchbutton">Launch Editor</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
