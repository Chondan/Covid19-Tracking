export function getApiUrl(type, array) {
    // api url 
    const requestUrl = "https://api.covid19api.com";
    const apiPath = require("../api/apiRoute.json");
    let apiUrl = `${requestUrl}${apiPath[type].Path}`;
    // regular expression to search for ':word'
    if (!array) { return; }
    const regex = /:\w+/;
    // inject variable into apiUrl by replacing matched value to value in array
    array.forEach(variable => {
        apiUrl = apiUrl.replace(regex, variable);
    });
    return apiUrl;
}
