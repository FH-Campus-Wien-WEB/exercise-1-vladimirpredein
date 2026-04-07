const express = require('express')
const path = require('path')
const app = express()
const moviesList = [
    {
      "Title":"Titanic",
      "Released":"1997-12-19",
      "Runtime":194,
      "Genres":["Drama", "Romance"],
      "Directors":["James Cameron"],
      "Writers":["James Cameron"],
      "Actors":["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      "Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":75,
      "imdbRating":8.0
    },
    {
      "Title":"Predator",
      "Released":"1987-06-12",
      "Runtime":107,
      "Genres":["Action", "Adventure", "Horror"],
      "Directors":["John McTiernan"],
      "Writers":["Jim Thomas", "John Thomas"],
      "Actors":["Arnold Schwarzenegger", "Carl Weathers", "Kevin Peter Hall"],
      "Plot":"A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BOWEzMDI0MTUtMjQ0Yy00MGRhLWI4YjAtZTgzZTM3NTYxZGJkXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":47,
      "imdbRating":7.8
    },
    {
      "Title":"Avatar",
      "Released":"2009-12-18",
      "Runtime":162,
      "Genres":["Action", "Adventure", "Fantasy"],
      "Directors":["James Cameron"],
      "Writers":["James Cameron"],
      "Actors":["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
      "Plot":"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore":83,
      "imdbRating":7.9
    }
  ]

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  //res.send('!dlrow olleH')
  res.json(moviesList)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

