// https://www.omdbapi.com/?i=tt3896198&apikey=5c739206
const apiKey = '5c739206'; 
const submit = document.getElementById('searchFormSubmit');
submit.addEventListener('click', () => {
  searchMovies();
})
    function searchMovies() {
        const title = document.getElementById('movieTitle').value;
        const type = document.getElementById('type').value;
        const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${title}&type=${type}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => { 
              console.log('hello', data);
              return displayMovies(data);
            })
            .catch(error => console.error('Error:', error));
    }

    function displayMovies(data) {
        const moviesContainer = document.getElementById('moviesContainer');
        const paginationContainer = document.getElementById('pagination');
        const detailsContainer = document.getElementById('detailsContainer');
        detailsContainer.innerHTML = '';

        if (data.Response === 'True') {
            const movies = data.Search;
            moviesContainer.innerHTML = '';

            movies.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');
                movieDiv.innerHTML = `<p>${movie.Title} (${movie.Year})</p>
                <img src="${movie.Poster}" alt="${movie.Title}" width="500" height="600">
                                      <button id="${movie.imdbID}">Details</button>`;
                moviesContainer.appendChild(movieDiv);
                document.getElementById(movie.imdbID).addEventListener('click', () => {
                  showMovieDetails(movie.imdbID);
                })
            });
            console.log('data.totalResults', data.totalResults);
            const totalPages = Math.ceil(data.totalResults / 10);
            console.log('totalPages', totalPages);
            displayPagination(totalPages);

        } else {
            moviesContainer.innerHTML = 'Movie not found!';
            paginationContainer.innerHTML = '';
        }
    }

    function displayPagination(totalPages) {
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.onclick = function () {
                fetchMoviesByPage(i);
            };
            paginationContainer.appendChild(pageButton);
        }
    }

    function fetchMoviesByPage(page) {
        const title = document.getElementById('movieTitle').value;
        const type = document.getElementById('type').value;
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=${type}&page=${page}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayMovies(data))
            .catch(error => console.error('Error:', error));
    }

    function showMovieDetails(imdbID) {
        const detailsContainer = document.getElementById('detailsContainer');
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                detailsContainer.innerHTML = `<h2>${data.Title}</h2>
                                              <p>Year: ${data.Year}</p>
                                              <p>Genre: ${data.Genre}</p>
                                              <p>Plot: ${data.Plot}</p>`;
            })
            .catch(error => console.error('Error:', error));
    }