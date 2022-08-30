import React from "react";

const ShowArtist = ({ data }) => {
  return (
    <>
      <h1 className="artist-name">{data["name"]}</h1>
      {<img className="artist-img" src={data["picture_medium"]}></img>}
    </>
  );
};

export default ShowArtist;
