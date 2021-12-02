const baseUrl = "http://localhost:3030/users"

export const register = async (data) => {

    let res = await fetch(baseUrl + '/register', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
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

export const login = async (data) => {

    let res = await fetch(baseUrl + '/login', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
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

