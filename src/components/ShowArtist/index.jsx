import React from "react";

const ShowArtist = ({ data }) => {
  return (
    <>
      <h2 className="artist-name">{data["name"]}</h2>
      {<img className="artist-img" src={data["picture_medium"]}></img>}
    </>
  );
};

export default ShowArtist;
