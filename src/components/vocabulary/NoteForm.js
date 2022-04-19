import React, { useState } from "react";
import { Image } from "react-feather";

const NoteForm = ({ addNote }) => {
  const [note, setNote] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note) {
      addNote({ text: note, img: image });
      setNote("");
      setImage("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="text"
            placeholder="Enter a link to an image (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <span className="icon is-small is-left">
            <Image />
          </span>
        </p>
      </div>
      <div className="field">
        <textarea
          className="textarea"
          placeholder="Add notes here (required)"
          value={note}
          rows="2"
          onChange={(e) => setNote(e.target.value)}
          required
        ></textarea>
      </div>
      <button className="button is-primary">Create a note</button>
    </form>
  );
};

export default NoteForm;
