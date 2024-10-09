const adUrls = [
    "*://*.doubleclick.net/*",
    "*://*.ads.yahoo.com/*",
    "*://*.googlesyndication.com/*",
    // Add more ad server URLs as needed
];

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        return { cancel: true };
    },
    { urls: adUrls },
    ["blocking"]
);
