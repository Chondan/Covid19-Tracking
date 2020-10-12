import axios from 'axios';

export const fetchData = async (apiUrl) => {
    try {
        const { data } = await axios.get(apiUrl);
        return data;
    } catch (error) {
        console.error(error);
    }
}