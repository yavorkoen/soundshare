
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
    let res = await fetch(`${baseUrl}/sounds/${ownerId}`)
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
        body: JSON.stringify(data)
    })
    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
}