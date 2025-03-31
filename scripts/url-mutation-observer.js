chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.startsWith('https://music.apple.com/')) {
        if (changeInfo.url) {
            chrome.tabs.sendMessage(tabId, { url: changeInfo.url });
        } else if (changeInfo.status === 'complete') {
            chrome.tabs.sendMessage(tab.id, { url: tab.url });
        }
    }
});