function loadJson(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(Error("Data didn't load successfully; error code:" + xhr.statusText));
            }
        };
        xhr.onerror = function () {
            reject(Error("There was a network error."));
        };
        xhr.send();
    });
}

export default loadJson;
