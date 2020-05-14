(function () {
  let movies = [
    {Title: 'Avatar', imdbID: 'tt4321', Poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg'},
    {Title: 'Terminator 2', imdbID: 'tt5432', Poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg'},
    {Title: 'Titanic', imdbID: 'tt6543', Poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg'},
  ]

  let $movieRows
  let $movieRowTemplate
  let $searchTitleFld
  let $searchBtn
  let $movieTitleDetail, $moviePosterDetail, $moviePlotDetail
  let service = new OmdbClient()

  function renderDetails(details) {
    $movieTitleDetail.html(details.Title)
    $moviePlotDetail.html(details.Plot)
    $moviePosterDetail.attr('src', details.Poster)
  }

  function searchMovieByImdbID(event) {
    const trDOM = event.currentTarget
    const $tr = $(trDOM)
    const imdbID = $tr.attr('id')
    service.findMovieByImdbID(imdbID)
      .then(function (results) {
        const details = results
        console.log(details)
        renderDetails(details)
      })
  }

  function renderMovies() {
    $movieRows.empty()
    for(let m = 0; m < movies.length; m++) {
      const movie = movies[m]
      const $movieRow = $movieRowTemplate.clone()
      $movieRow.attr('id', movie.imdbID)
        .click(searchMovieByImdbID)
      $movieRow.find('.modb-movie-title').html(movie.Title)
      $movieRow.find('.modb-movie-imdbID').html(movie.imdbID)
      $movieRow.find('.modb-movie-poster').attr('src', movie.Poster)
      $movieRows.append($movieRow)
    }
  }

  function findBatmanMovies() {
    service.findBatmanMovies()
      .then(function(results) {
        movies = results.Search
        renderMovies()
      })
  }

  function searchMovieByTitle() {
    const title = $searchTitleFld.val()
    service.searchMovieByTitle(title)
      .then(function (results) {
        movies = results.Search
        renderMovies()
      })
  }

  function main() {
    $movieRows = $('.omdb-movie-rows')
    $movieRowTemplate = $('.omdb-movie-row-template').clone()
    $searchTitleFld = $('.omdb-search-title')
    $searchBtn = $('.omdb-search-btn')
      .click(searchMovieByTitle)

    $movieTitleDetail = $('.omdb-movie-title-detail')
    $moviePosterDetail = $('.omdb-movie-poster-detail')
    $moviePlotDetail = $('.omdb-movie-plot-detail')


    findBatmanMovies()
    // renderMovies()
  }

  $(main)

})()
