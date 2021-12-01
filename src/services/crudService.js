
const baseUrl = 'http://localhost:3030/jsonstore/cards'

export const getAll = async () => {
    let result = await fetch(baseUrl)
    let data = await result.json();
    return data;
}
