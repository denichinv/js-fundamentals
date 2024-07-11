function movies(movieInfo) {
  let arr = [];

  for (const movie of movieInfo) {
    if (movie.includes("addMovie")) {
      let movieName = movie.split("addMovie ")[1];
      let movieObj = { name: movieName };
      arr.push(movieObj);
    } else if (movie.includes("directedBy")) {
      let [movieName, director] = movie.split(" directedBy ");
      let movieFound = arr.find((m) => m.name === movieName);
      if (movieFound) {
        movieFound.director = director;
      } else {
        let movieObj = { name: movieName, director: director };
        arr.push(movieObj);
      }
    } else {
      let [movieName, date] = movie.split(" onDate ");
      let movieFound = arr.find((m) => m.name === movieName);
      if (movieFound) {
        movieFound.date = date;
      }
    }
  }
  for (const movieObj of arr) {
    if (movieObj.name && movieObj.director && movieObj.date) {
      console.log(JSON.stringify(movieObj));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
