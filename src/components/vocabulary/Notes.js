import React, { useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";
import Note from "./Note";
import NoteForm from "./NoteForm";

// TODO: add the notes to the phrases as well
// TODO: make sure the export for anki containes notes as well
// TODO: create a help section for the new feature

const Notes = ({ kanji, deckId }) => {
  const { dispatch } = useContext(VocabContext);
  const addNote = (note) => {
    dispatch({
      type: "ADD_KANJI_NOTE",
      note,
      deckId,
      kanji: kanji.query,
    });
  };
  const removeNote = (note) => {
    dispatch({
      type: "REMOVE_KANJI_NOTE",
      note,
      deckId,
      kanji: kanji.query,
    });
  };
  const updateNote = (note) => {
    dispatch({
      type: "UPDATE_KANJI_NOTE",
      note,
      deckId,
      kanji: kanji.query,
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
      {!kanji.notes && "You currently don't have any notes for this kanji."}
      <div className="columns is-multiline">
        {kanji.notes &&
          kanji.notes.map((note) => (
            <Note note={note} removeNote={removeNote} updateNote={updateNote} />
          ))}
      </div>
    </div>
  );
};

export default Notes;
