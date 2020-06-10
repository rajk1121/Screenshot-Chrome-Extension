function setUrl(url) {
    document.getElementById('target').href = url;
    document.getElementById('target').click()
}
let id = 1;
function run() {
    chrome.tabs.captureVisibleTab((URL) => {
        const viewTabUrl = chrome.extension.getURL('page.html?id=' + id++)
        setUrl(URL)
    });
}

document.getElementById('run').addEventListener('click', run);