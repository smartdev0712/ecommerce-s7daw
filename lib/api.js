import qs from "qs";
import http from "../components/http"
import axios from "axios"

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */

export function getStrapiURL(path = "") {
    return `https://meta-floor-strapi-app.herokuapp.com${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // const login = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
    //     identifier: "freelance1773@gmail.com",
    //     password: "greenland712",
    // })

    //Merge default and user options
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.READ_ONLY_TOKEN}`
        },
        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    //Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}