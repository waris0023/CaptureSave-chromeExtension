chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.captureVisibleTab(function(captureUrl) {
    var tabUrl = chrome.extension.getURL('screenshot.html?id=1411')
    chrome.tabs.onUpdated.addListener(function listener(tabId, changedProps) {
        
      if (tabId != tabId || changedProps.status != "complete")
        return;
    
      chrome.tabs.onUpdated.removeListener(listener);
      var views = chrome.extension.getViews();
      for (var i = 0; i < views.length; i++) {
        var view = views[i];
        if (view.location.href == tabUrl) {
          view.setCaptureUrl(captureUrl);
          break;
        }
      }
    });
      var tabId = null, downloadId = null, imageId = null;
    chrome.tabs.create({url: tabUrl}, function(tab) {
      tabId = tab.id;
    });
    chrome.downloads.download({url: captureUrl}, function(down) {
      downloadId = down.id;  
    }); 
  });
});