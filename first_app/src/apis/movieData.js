import axios from "axios";
const TMDB_API_KEY="53200af1fabb723edbed6a89600e1449";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: `${TMDB_API_KEY}`
  }
});
