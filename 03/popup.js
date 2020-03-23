$(function() {
  let color = $("#fontColor").val();
  $("#fontColor").on("change paste keyup", function() {
    color = $(this).val();
  });

  $("#btnChange").click(function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(
      tabArray
    ) {
      chrome.tabs.sendMessage(tabArray[0].id, {
        todo: "changeColor",
        clickColor: color
      });
    });
  });

  $("#kt").click(function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function(
      tabArray
    ) {
      chrome.tabs.sendMessage(tabArray[0].id, {
        ok: "okok",
        clickColor: "Say hi!"
      });
    });
  });
});
