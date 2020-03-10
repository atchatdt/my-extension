$(function() {
  chrome.storage.sync.get("total", function(budget) {
    $("#total").text(budget.total);
  });
  $("#spandAmount").click(function() {
    chrome.storage.sync.get("total", function(budget) {
      let newTotal = 0;
      if (budget.total) {
        newTotal += +budget.total;
      }
      let ammount = $("#amount").val();
      if (ammount) {
        newTotal += +ammount;
      }

      chrome.storage.sync.set({ total: newTotal });
      $("#total").text(newTotal);
      $("#amount").val("");
    });
  });
});
