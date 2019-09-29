import axios from 'axios';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

axios.defaults.baseURL = 'http://localhost:3000/notes';

export const getNotes = async () => {
    try {
        const response = await axios.get();
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

export const savePost = async (post) => {
    try {
        const response = await axios.post('', post);
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`/${id}`);
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};