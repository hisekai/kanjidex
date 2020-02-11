import React, { useState, useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";

const NewDeckForm = ({ setMood }) => {
  const { dispatch } = useContext(VocabContext);
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_DECK",
      deck: {
        title
      }
    });
    setTitle("");
    setMood("happy");
  };
  const handleChange = e => {
    setTitle(e.target.value);
    setMood("excited");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has-addons has-addons-centered">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Create a deck"
              value={title}
              onChange={e => handleChange(e)}
              onBlur={() => {
                setMood("happy");
              }}
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewDeckForm;
