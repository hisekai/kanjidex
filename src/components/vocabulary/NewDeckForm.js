import React, { useState, useContext } from "react";
import { VocabContext } from "../../contexts/VocabContext";

const NewDeckForm = ({ setMood }) => {
  const { dispatch } = useContext(VocabContext);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    if (title.length > 0) {
      e.preventDefault();
      setError(false);
      dispatch({
        type: "ADD_DECK",
        deck: {
          title,
        },
      });
      setTitle("");
      setMood("happy");
    } else {
      setError(true);
    }
  };
  const handleChange = (e) => {
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
              onChange={(e) => handleChange(e)}
              onBlur={() => {
                setMood("happy");
              }}
            />
            {error && (
              <p class="help is-danger">
                You need to enter one or more characters.
              </p>
            )}
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
