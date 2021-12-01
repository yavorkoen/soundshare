const baseUrl = "http://localhost:3030/users"

export const register = (data) => {

    return fetch(baseUrl + '/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
}

export const login = (data) => {
    
}