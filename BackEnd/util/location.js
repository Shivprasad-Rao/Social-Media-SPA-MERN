/* const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = ''; */

async function getCoordsForAddress(address) {
    return {
        lat: 40.748447,
        lng: -73.9871516
    };

    /* const response = await axios.get(
        `api address=${encodeURIComponent(address)}&key=${API_KEY}`
    );

    const data = response.data;

    if(!data || data.status === "ZERO_RESULTS"){
        const error = new HttpError("Could not find location for specified address",422);
        throw error;
    }

    const coordinates = data.result[0].geometry.location;

    return coordinates */
}

module.exports = getCoordsForAddress;