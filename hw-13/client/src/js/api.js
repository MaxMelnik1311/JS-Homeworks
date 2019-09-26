const url = 'http://localhost:3000/notes';

function getNotes() {
    return fetch(url)
    .then(response => response.json())
    .catch(console.warn())
}

function savePost(post) {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
    }

    return fetch(url, opts)
    .then(response => response.json())
    .then(console.log)
    .catch(console.warn)
}

function deletePost(id) {
    const opts = {
        method: 'DELETE',
    }

    return fetch(`${url}/${id}`, opts)
    .then(response => response.json())
    .then(console.log)
    .catch(console.warn)
}