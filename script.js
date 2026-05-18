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



const studentClassManipulation= () => {
        const students = [
        { name: "Adem", grades: [85, 92, 78, 90, 88], subject: "Math" },
        { name: "Sara", grades: [92, 95, 98, 91, 97], subject: "Science" },
        { name: "John", grades: [55, 60, 45, 70, 58], subject: "Math" },
        { name: "Lisa", grades: [78, 82, 79, 85, 80], subject: "Science" },
        { name: "Mike", grades: [40, 35, 50, 45, 38], subject: "Math" }
    ]

    const studentsWithAverage= students.map(student=> ({
        ...student,average: student.grades.reduce((total,grade)=>total+grade,0)/student.grades.length
    }))
    console.log(studentsWithAverage)
    const passingStudents = studentsWithAverage.filter(student=> student.average>=70)
    console.log(passingStudents)
    const failingStudentsNames = (studentsWithAverage.filter(student=> student.average<70)).map(student=> student.name)
    console.log(failingStudentsNames)
    const hasPerfectScore = studentsWithAverage.some(student => student.grades.some(grade => grade === 100))
    console.log(hasPerfectScore)
    const classAverage = studentsWithAverage.reduce((total,student)=>total+student.average,0)/studentsWithAverage.length
    console.log(classAverage)
    const passingMathStudents = passingStudents.filter(passingStudent=> passingStudent.subject==="Math")
    studentsWithAverage.forEach(student => {
    const status = student.average >= 70 ? "PASSING" : "FAILING"
    console.log(`${student.name} | ${student.subject} | Average: ${student.average} | Status: ${status}`)
})
}

studentClassManipulation()


const carManipulation= () => {

    const car = { // this is an object
        brand:"BMW",
        speed:140,
        accelerate : () => car.speed+=10, // a function inside an object    is called a method
        brake : () => car.speed -=10,
        status : () => console.log(`Brand : ${car.brand} | Speed : ${car.speed}`)
    }

    car.status()       
    car.accelerate()
    car.status()       
    car.brake()
    car.status()  

}

carManipulation()



const learningDestructuring = ()=>{

    const product = {
        title: "Laptop",
        price: 999,
        brand: "Dell",
        inStock: true
    }

    const {title , price , brand , inStock} = product 
    const {title:productTitle , price : cost } = product     
    const productDescription = ({title,brand,price:cost,inStock}) => console.log(`${title} by ${brand} - ${cost} - ${inStock?"In Stock":"Not In Stock"}`)
    productDescription(product)

}
learningDestructuring()
