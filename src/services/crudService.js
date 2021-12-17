
const baseUrl = 'http://localhost:3030/data'



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