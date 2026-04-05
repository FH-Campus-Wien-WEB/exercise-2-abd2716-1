/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
  tt0120338: {
    imdbID: "tt0120338",
    Title: "Titanic",
    Released: "1997-12-19",
    Runtime: 194,
    Genres: ["Drama", "Romance"],
    Directors: ["James Cameron"],
    Writers: ["James Cameron"],
    Actors: ["Leonardo DiCaprio", "Kate Winslet"],
    Plot: "A young woman and a struggling artist fall in love aboard the Titanic just before disaster strikes.",
    Poster: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2024/02/IMG_8085-scaled.jpeg",
    Metascore: 75,
    imdbRating: 7.9
  },

  tt0816692: {
    imdbID: "tt0816692",
    Title: "Interstellar",
    Released: "2014-11-07",
    Runtime: 169,
    Genres: ["Adventure", "Drama", "Sci-Fi"],
    Directors: ["Christopher Nolan"],
    Writers: ["Jonathan Nolan", "Christopher Nolan"],
    Actors: ["Matthew McConaughey", "Anne Hathaway"],
    Plot: "Explorers travel through a wormhole in space to save humanity.",
    Poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg",
    Metascore: 74,
    imdbRating: 8.7
  },

  tt1375666: {
    imdbID: "tt1375666",
    Title: "Inception",
    Released: "2010-07-30",
    Runtime: 148,
    Genres: ["Action", "Sci-Fi", "Thriller"],
    Directors: ["Christopher Nolan"],
    Writers: ["Christopher Nolan"],
    Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    Plot: "A thief enters dreams to steal secrets but must plant an idea instead.",
    Poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    Metascore: 74,
    imdbRating: 8.8
  }
};

module.exports = movies;