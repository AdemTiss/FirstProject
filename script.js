const arrayManipulation = () => {
    const numbers = [3, 7, 12, 5, 18, 1, 9, 14]

    numbers.forEach(n => console.log(3*n))
    const bigNumbers = numbers.filter(n=> n>6)
    const squaredNumbers = numbers.map(n => n *n)
    console.log(bigNumbers)
    console.log(squaredNumbers)
}


arrayManipulation()


const Movie = ()=> {
    const movies = [
        { title: "Inception", rating: 8.8, year: 2010, watched: true },
        { title: "Interstellar", rating: 8.6, year: 2014, watched: false },
        { title: "The Dark Knight", rating: 9.0, year: 2008, watched: true },
        { title: "Dunkirk", rating: 7.9, year: 2017, watched: false },
        { title: "Tenet", rating: 7.4, year: 2020, watched: true },
        { title: "Oppenheimer", rating: 8.4, year: 2023, watched: false }
    ]
    const movieTitles= movies.map(movie=>movie.title)
    const excellentMovies=movies.filter(movie=> movie.rating>8.5)
    const watchList= movies.filter( movie=> movie.watched === false )
    const averageRatings= movies.reduce((total,movie)=>total+movie.rating,0)/movies.length
    const firstUnwatchedMovie= watchList.find(movie=> movie.rating>8.0 )
    const isBelow90=movies.some(movie => movie.rating>9.0)
    const isWatchedAll = movies.every(movie => movie.watched)
    const movieWatchedTitles= (movies.filter(movie => movie.watched ===true)).map(movie=> movie.title)



}

Movie()