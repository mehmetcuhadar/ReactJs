import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID apKvaItn5s0RUhnL7Crq2ELveJZr5c69tluBUKEdklg'
    }
});