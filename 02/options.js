$(function() {

    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit)
    })

  $("#saveLimit").click(function() {
    let limit = $("#limit").val();
    if(limit){
        chrome.storage.sync.set({'limit':limit}, function(){
            close()
        })
    }

  });

  $('#resetTotal').click(function(){
      chrome.storage.sync.set({'total':0})
      let notiOptions = {
        type: 'basic',
        iconUrl:"icon128.png",
        title: "total reset",
        message:"hmmm, :D"
      }
      chrome.notifications.create("limitNoti",notiOptions)
  })
});
