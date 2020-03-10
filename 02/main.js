$(function() {
  chrome.storage.sync.get(["total","limit"], function(budget) {
    $("#total").text(budget.total);
    $("#limit").text(budget.limit);
  });
  $("#spandAmount").click(function() {
    chrome.storage.sync.get(["total","limit"], function(budget) {
      let newTotal = 0;
      if (budget.total) {
        newTotal += +budget.total;
      }
      let ammount = $("#amount").val();
      if (ammount) {
        newTotal += +ammount;
      }

      chrome.storage.sync.set({ total: newTotal },function(){
        if(ammount && newTotal >= budget.limit){
          let notiOptions = {
            type: 'basic',
            iconUrl:"icon128.png",
            title: "limit reached",
            message:"hmmm, :)"
          }
          chrome.notifications.create("limitNoti",notiOptions)
        }
      });
      $("#total").text(newTotal);
      $("#amount").val("");
    });
  });

});
