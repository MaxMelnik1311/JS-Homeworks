const url = 'http://localhost:3000/notes';

export const getPosts = () => {
    return fetch(url).then(responce => {
        if(responce.ok) {
            return responce.json();
        }
        throw new Error('Error while fetching' + responce.statusText);
    });
};

export const savePost = (post) => {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
    }

    return fetch(url, opts).then(responce => {
        if(responce.ok) {
            return responce.json();
        }
        throw new Error('Error while fetching' + responce.statusText);
    });
}

export const deletePost = (id) => {
    const opts = {
        method: 'DELETE',
    }

    return fetch(`${url}/${id}`, opts).then(responce => {
        if(responce.ok) {
            return responce.json();
        }
        throw new Error('Error while fetching' + responce.statusText);
    });
}