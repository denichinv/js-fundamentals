function followers(arr) {
  let followersData = {};
  let totalFollowers = 0;

  for (let row of arr) {
    let tokens = row.split(": ");
    let command = tokens.shift();

    if (command === "New follower") {
      let username = tokens.shift();
      if (username in followersData) {
      } else {
        followersData[username] = { likes: 0, comments: 0 };
        totalFollowers++;
      }
    } else if (command === "Like") {
      let username = tokens.shift();
      let count = Number(tokens.shift());

      if (username in followersData) {
        followersData[username].likes += count;
      } else {
        followersData[username] = { likes: count, comments: 0 };
        totalFollowers++;
      }
    } else if (command === "Comment") {
      let username = tokens.shift();

      if (username in followersData) {
        followersData[username].comments += 1;
      } else {
        followersData[username] = { likes: 0, comments: 1 };
        totalFollowers++;
      }
    } else if (command === "Blocked") {
      let username = tokens.shift();

      if (username in followersData) {
        delete followersData[username];
        totalFollowers--;
      } else {
        console.log(`${username} doesn't exist.`);
      }
    } else {
      break;
    }
  }

  let entries = Object.entries(followersData);
  console.log(`${totalFollowers} followers`);

  for (const follower of entries) {
    let username = follower[0];

    let likes = Number(followersData[username].likes);
    let comments = Number(followersData[username].comments);

    let totalCount = likes + comments;

    console.log(`${username}: ${totalCount}`);
  }
}

followers([
  "Like: Katy: 3",
  "Comment: Katy",
  "New follower: Bob",
  "Blocked: Bob",
  "New follower: Amy",
  "Like: Amy: 4",
  "Log out",
]);
