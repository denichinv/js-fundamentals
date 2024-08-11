function browserHistory(obj, arr) {
  for (const tokens of arr) {
    const [action, webSite] = tokens.split(" ");

    if (action === "Open") {
      obj["Open Tabs"].push(webSite);
      obj["Browser Logs"].push(`${action} ${webSite}`);
    } else if (action === "Close") {
      const indexToRemove = obj["Open Tabs"].indexOf(webSite);

      if (indexToRemove !== -1) {
        obj["Open Tabs"].splice(indexToRemove, 1);
        obj["Browser Logs"].push(`${action} ${webSite}`);
        obj["Recently Closed"].push(webSite);
      }
    } else if (action === "Clear") {
      obj["Open Tabs"] = [];
      obj["Recently Closed"] = [];
      obj["Browser Logs"] = [];
    }
  }
  const entries = Object.entries(obj);
  const browser = entries[0][1];
  console.log(browser);
  console.log(`${entries[1][0]}: ${entries[1][1].join(", ")}`);
  console.log(`${entries[2][0]}: ${entries[2][1].join(", ")}`);
  console.log(`${entries[3][0]}: ${entries[3][1].join(", ")}`);
}
browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
