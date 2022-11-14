const URL = '/products';

/**
 * Get products data from API
 * @returns an array of products
 */
export async function getProducts() {
    // wiremock: add "proxy" to package.json to avoid CORS policy problems
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

/**
 * Fetch data of a single product from API
 * @param {*} - id of the product
 * @returns an object with product information
 */
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