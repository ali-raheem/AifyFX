function getSelectedText() {
  return window.getSelection().toString();
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "getSelectedText") {
      sendResponse(getSelectedText());
  }
});
