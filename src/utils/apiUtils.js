const URL = '/products';

// get products data from API and return it as an array
export async function getProducts() {
    // wiremock: add "proxy" to package.json to avoid CORS policy problems)
    const url = URL;
    const init = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const request = new Request(url, init);
    
    return fetch(request)
        // send an empty array if something goes wrong
        .then(resp => resp.ok ? resp.json() : [])
        .catch(err => console.log(err));
}

// fetch data of a single product from API and return it as an object
export async function getProductById(id) {
    const url = `${URL}/${id}`;
    const init = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const request = new Request(url, init);

    return fetch(request)
        // send an empty object if something goes wrong
        .then(resp => resp.ok ? resp.json() : {})
        .catch(err => console.log(err));
}