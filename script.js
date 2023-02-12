const api_key = "743080b3";
const api = `http://www.omdbapi.com/?apikey=${api_key}`;
const img_api = `http://img.omdbapi.com/?apikey=${api_key}`;

function getMovieData(title) {
  return fetch(`${api}&t=${title}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.Title);
      return {
        title: data.Title,
        year: data.Year,
        imdbRating: data.imdbRating,
        cast: data.Actors,
        poster: `${img_api}&i=${data.imdbID}`,
      };
    });
}

function MovieSerch() {
  const title = document.getElementById("movie-title").value;
  getMovieData(title).then((data) => {
    document.getElementById("movie-poster").src = data.poster;
   document.getElementById("movie-title").innerText = data.title;
    document.getElementById("movie-year").innerHTML = data.year;
    document.getElementById("movie-imdb-rating").innerHTML = data.imdbRating;
    document.getElementById("movie-cast").innerHTML = data.cast;
    // document.getElementsByClassName('title').innerHTML = data.title
    
  });
}