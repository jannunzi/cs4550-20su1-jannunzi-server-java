function OmdbClient() {
  this.url = 'http://www.omdbapi.com/?s=TITLE&apikey=4a249f8d'
  this.urlFindByImdbID = 'http://www.omdbapi.com/?i=IMDBID&apikey=4a249f8d'
  this.findBatmanMovies = findBatmanMovies
  this.searchMovieByTitle = searchMovieByTitle
  this.findMovieByImdbID = findMovieByImdbID
  self = this
  function findBatmanMovies() {
    return fetch(self.url.replace('TITLE', 'batman'))
      .then(function (response) {
        return response.json()
      })
  }
  function searchMovieByTitle(title) {
    return fetch(self.url.replace('TITLE', title))
      .then(function (response) {
        return response.json()
      })
  }
  function findMovieByImdbID(imdbID) {
    return fetch(self.urlFindByImdbID.replace('IMDBID', imdbID))
      .then(function (response) {
        return response.json()
      })
  }
}
