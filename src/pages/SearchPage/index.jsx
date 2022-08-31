import React, { useState, useEffect } from "react";

import ShowArtist from "../../components/ShowArtist";
import SearchForm from "../../components/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { loadArtistAction } from "../../actions";

const SearchPage = () => {
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.showData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(loadArtistAction(search));
  }, [search]);

  function handleSearch(userInput) {
    setSearch(userInput);
  }
  return (
    <>
      <h1 className="header">Music App</h1>
      <h3 className="header">Discover your favorite artists</h3>
      <SearchForm getResults={handleSearch} />
      <ShowArtist data={showData} />
      <p className="footer">
        Ⓒ 2022 <a href="https://developers.deezer.com/api">Deezer</a>
      </p>
    </>
  );
};

export default SearchPage;
