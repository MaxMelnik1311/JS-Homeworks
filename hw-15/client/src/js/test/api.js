const axios = require('axios');
require('core-js/stable');
require('regenerator-runtime/runtime');

axios.defaults.baseURL = 'http://localhost:3030/initialNotes';

const getNotes = async () => {
    try {
        const response = await axios.get();
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

const savePost = async (post) => {
    try {
        const response = await axios.post('', post);
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

const deletePost = async (id) => {
    try {
        const response = await axios.delete(`/${id}`);
        const data = await response.data;
        return data;
    } catch(error) {
        throw new Error(`Error while requesting ${response.statusText}`);
    }
};

module.exports = getNotes;
module.exports = savePost;
module.exports = deletePost;