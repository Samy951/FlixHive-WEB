import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json',
    },
params : {
    api_key: 'db7ff1bedcfb63197436b09955f17eef',
}
});