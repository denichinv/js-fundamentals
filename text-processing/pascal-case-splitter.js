function pascalCaseSplitter(str) {
  let pattern = /[A-Z][a-z]*/g;

  let allMatches = str.match(pattern);

  console.log(allMatches.join(", "));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
