import axios from "axios";
const KEY = 'AIzaSyAhMJ9hZVkgtJ4WplwxZzQf7lfD77r0Gog';


export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params: {
            part:'snippet',
            maxResults:5,
            key:KEY,
        }
    }
);

