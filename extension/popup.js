let saveFakeNews = document.getElementById('saveFakeNews');

saveFakeNews.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {file: './browser/js/highlight-selected-text.js'});
    });
};