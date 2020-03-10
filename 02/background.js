let contextMenuItem = {
  id: "sampleContextMenu",
  title: "Sample Context Menu",
  contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

// add event select text with right click
chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId == "sampleContextMenu" && clickData.selectionText) {
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(["total", "limit"], function(budget) {
        let newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ total: newTotal }, function() {
          if (newTotal >= budget.limit) {
            let notiOptions = {
              type: "basic",
              iconUrl: "icon128.png",
              title: "total reset",
              message: "hmmm, :D"
            };
            chrome.notifications.create("limitNoti", notiOptions);
          }
        });
      });
    }
  }
});
