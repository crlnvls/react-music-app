import axios from "axios";

export function loadArtistAction(search) {
  return async (dispatch) => {
    try {
      const options = {
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${search}`,
        headers: {
          "X-RapidAPI-Key":
            "31820a2352msh10454d1f55b751ap1bd82cjsnd1433dcfd549",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };
      const results = await axios.request(options);

      dispatch({
        type: "LOAD_SHOWS",
        payload: results.data,
      });
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err,
      });
    }
  };
}
