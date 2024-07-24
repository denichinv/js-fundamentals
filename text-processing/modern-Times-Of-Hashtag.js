function modernTimesOfHashtag(str) {
  let textArr = str.split(" ");
  let startingWithHashTag = textArr.filter(
    (word) => word.startsWith("#") && word.length > 1
  );

  let pattern = /\b[A-Za-z]+\b/;

  for (let word of startingWithHashTag) {
    word = word.substring(1);

    if (pattern.test(word)) {
      console.log(word);
    }
  }
}

modernTimesOfHashtag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
