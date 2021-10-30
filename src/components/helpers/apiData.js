import axios from 'axios';

const fetchData = async (data, method = 'GET') => {
    const { url, header } = data;

    if (method === 'GET') {
        const options = {
            method,
            url: url,
            headers: header,
        };
        return axios.request(options);
    }
};
export { fetchData };
