browser.tabs.onUpdated.addListener(() => {
    browser.runtime.reload();
  });