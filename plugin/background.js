function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true});
}

browser.browserAction.onClicked.addListener(() => {
  getActiveTab().then(tabs => {
      browser.tabs.sendMessage(tabs[0].id, {command: "getSelection"}).then(response => {
          console.log(response.selection);
      });
  });
});
