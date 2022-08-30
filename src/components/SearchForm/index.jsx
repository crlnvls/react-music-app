import React, { useState } from "react";

const SearchForm = ({ getResults }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    const newInput = e.target.value.replaceAll(" ", "-");
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    getResults(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        className="search-bar"
        type="text"
        onChange={handleInput}
        required
      ></input>
      <div className="center-btn">
        <input className="search-btn" type="submit" value="Search"></input>
      </div>
    </form>
  );
};

export default SearchForm;
