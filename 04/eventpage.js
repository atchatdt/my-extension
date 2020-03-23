let contextMenuItem = {
    "id":"search",
    "title":"Search",
    "contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "search" && clickData.selectionText){
        // let urlWiki = "https://vi.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText)
        let urlWiki = "https://www.google.com/search?q=" + fixedEncodeURI(clickData.selectionText)
        let createData = {
            "url":urlWiki,
            "type":"popup",
            "top":5,
            "left":5,
            "width": screen.availWidth/2,
            "height":screen.availHeight/2
        }
        chrome.windows.create(createData, function(){})
    }

})