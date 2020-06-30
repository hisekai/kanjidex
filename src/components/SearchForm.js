import React from "react";

const SearchForm = ({
  handleSubmit,
  query,
  setQuery,
  queryType,
  handleQueryType,
  setMood,
}) => {
  const handleChange = (e) => {
    e.target.value ? setMood("excited") : setMood("happy");
    setQuery(e.target.value);
  };
  return (
    <form
      id="kanjidex-form"
      onSubmit={handleSubmit}
      style={{ marginBottom: "10px" }}
    >
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            id="main-search"
            className="input is-primary"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={queryType === "english" ? "Search in" : "Search for"}
          />
        </p>
        <p className="control">
          <span className="select is-primary">
            <select
              value={queryType}
              onChange={(e) => handleQueryType(e.target.value)}
            >
              <option value="kanji">Kanji</option>
              <option value="phrase">Word</option>
              <option value="english">English</option>
            </select>
          </span>
        </p>
        <p className="control">
          <button type="submit" className="button is-primary button-search">
            Search
          </button>
        </p>
      </div>
    </form>
  );
};

export default SearchForm;
