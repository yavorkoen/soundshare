// import { requester } from './requester.js';
const baseUrl = 'http://localhost:3030/data'

export const getAll = async () => {
    let res = await fetch(baseUrl + '/sounds')
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}


export const getMySounds = async (ownerId) => {
    let res = await fetch(`${baseUrl}/sounds?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`)
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const getOne = async (cardId) => {
    let res = await fetch(`${baseUrl}/sounds/${cardId}`)
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}


export const create = async (token, data) => {
    let res = await fetch(baseUrl + '/sounds', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...data, likes: [] })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const remove = async (path ,token) => {
    let res = await fetch(baseUrl + path, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
    let response = await res.json();
    return response;
}

// export const getLikes = async () => {
//     let res = await fetch(baseUrl + '/likes')
//     let jsonResult = await res.json();
//     if (res.ok) {
//         return jsonResult;
//     } else {
//         throw jsonResult;
//     }
// }

// export const addLike = async (token, cardId, data) => {
//     let res = await fetch(baseUrl + '/sounds/' + cardId, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(data)
//     })
//     let jsonResult = await res.json();
//     if (res.ok) {
//         return jsonResult;
//     } else {
//         throw jsonResult;
//     }
// }


export const get = async (path) => {
    let res = await fetch(baseUrl + path)
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const post = async (path, token, data) => {
    let res = await fetch(baseUrl + path, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...data })
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}

export const update = async (path, token, data) => {
    let res = await fetch(baseUrl + path, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...data})
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}