chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "changeColor"){
        let addColor = '#' + request.clickColor;
        $('.api').css('color',addColor)
    }

    if(request.ok == "okok"){
        alert('okoko')
    }
})