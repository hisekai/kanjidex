import React, { useState } from "react";
import { Trash2, Edit3, Image, Save } from "react-feather";
import styled from "styled-components";

const StyledNote = styled.div`
  .card-image img {
    cursor: pointer;
  }
`;

const Note = ({ note, removeNote, updateNote }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);
  const [newImg, setNewImg] = useState(note.img);
  const handleDelete = () => {
    removeNote(note);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    setIsEditing(false);
    const newNote = { id: note.id, text: newText, img: newImg };
    updateNote(newNote);
  };
  return !isEditing ? (
    <div className="column is-4" style={{ alignSelf: "flex-end" }}>
      <StyledNote className="card">
        {note.img && (
          <div class="card-image">
            <figure class="image is-4by3">
              <img src={note.img} onClick={() => setIsVisible(true)} />
            </figure>
          </div>
        )}
        <div className="card-content">
          <div className="content">{note.text}</div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <button className="button is-inverted is-info" onClick={handleEdit}>
              Edit <Edit3 style={{ marginLeft: "8px" }} />
            </button>
          </div>
          <div href="#" className="card-footer-item">
            <button
              className="button is-inverted is-danger"
              onClick={handleDelete}
            >
              Delete <Trash2 style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </footer>
      </StyledNote>
      <div className={isVisible ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-fullwidth">
            <img src={note.img} onClick={() => setIsVisible(false)} />
          </p>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setIsVisible(false)}
        ></button>
      </div>
    </div>
  ) : (
    <div className="column is-4" style={{ alignSelf: "flex-end" }}>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter a link to an image (optional)"
                  value={newImg}
                  onChange={(e) => setNewImg(e.target.value)}
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
                value={newText}
                rows="2"
                onChange={(e) => setNewText(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <button className="button is-inverted is-info" onClick={handleSave}>
              Save <Save style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Note;
