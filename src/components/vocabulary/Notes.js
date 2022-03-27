import React, { useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import Note from "./Note";
import NoteForm from "./NoteForm";

const Notes = ({ current, deckId, type }) => {
  const { dispatch } = useContext(VocabContext);
  const addNote = (note) => {
    dispatch({
      type: `ADD_${type}_NOTE`,
      note,
      deckId,
      query: type === "KANJI" ? current.query : current.slug,
    });
  };
  const removeNote = (note) => {
    dispatch({
      type: `REMOVE_${type}_NOTE`,
      note,
      deckId,
      query: type === "KANJI" ? current.query : current.slug,
    });
  };
  const updateNote = (note) => {
    dispatch({
      type: `UPDATE_${type}_NOTE`,
      note,
      deckId,
      query: type === "KANJI" ? current.query : current.slug,
    });
  };
  return (
    <div>
      <p className="subtitle is-12 has-text-grey-light is-spaced">Notes</p>
      <p>
        Add personal notes to help you with your study be it helpful tips or
        additional information.
      </p>
      <br />
      <NoteForm addNote={addNote} />
      <hr />
      {!current.notes && "You currently don't have any notes."}
      <div className="columns is-multiline">
        {current.notes &&
          current.notes.map((note) => (
            <Note note={note} removeNote={removeNote} updateNote={updateNote} />
          ))}
      </div>
    </div>
  );
};

export default Notes;
