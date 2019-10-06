const axios = require('axios');
require('core-js/stable');
require('regenerator-runtime/runtime');

axios.defaults.baseURL = 'http://localhost:3000';

const getNotes = async () => {
    try {
        const response = await axios.get('/initialNotes');
        const { data } = await response;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

const savePost = async post => {
    try {
        const response = await axios.post('/initialNotes', post);
        const { data } = await response;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

const deletePost = async id => {
    try {
        const response = await axios.delete(`'/initialNotes'/${id}`);
        const { data } = await response;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

module.exports = { getNotes, savePost, deletePost };
