function searchForNum(arr1, arr2) {
  const [toTake, toDelete, search] = arr2;

  let slicedArr = arr1.slice(0, toTake);

  slicedArr.splice(0, toDelete);

  let includes = 0;
  for (const num of slicedArr) {
    if (search === num) {
      includes++;
    }
  }

  console.log(`Number ${search} occurs ${includes} times.`);
}
searchForNum(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
