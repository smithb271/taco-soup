var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for(var i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`)
}
var aGrades = 0
var bGrades = 0
var cGrades = 0
var dGrades = 0
var fGrades = 0
var totalGradePoints = 0
var mostCommonGrade = ""
var mostCommonGradeCount = 0

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for (let i = 0; i < grades.length; i++){
    totalGradePoints += grades[i]
    if(grades[i] >= 70 && grades[i] <= 76){
console.log("You got a D!")
    } else if(grades[i] >= 77 && grades[i] <= 84){
        console.log("You got a C!")
    } else if(grades[i] >= 84 && grades[i] <= 92){
        console.log("You got a B!")
        bGrades++
    } else if(grades[i] >= 93 && grades[i] <= 100){
        console.log("You got a A!")
        aGrades++
        
    }

    } 
    console.log(aGrades)
    console.log(bGrades)
for(let i = 0; i < grades.length; i++){
    if (mostCommonGradeCount < aGrades){
        mostcommonGradeCount = aGrades
        mostCommonGrade = "A"
    } else if(mostCommonGradeCount < bGrades){
        mostCommonGradeCount = bGrades
        mostCommonGrade = "B"
    } else if(mostCommonGradeCount < cGrades){
        mostCommonGradeCount = cGrades
        mostCommonGrade = "C"
    } else if (mostCommonGradeCount < dGrades){
        mostCommonGradeCount = dGrades
        mostCommonGrade = "D"
    } else if (mostCommonGradeCount < fGrades){
        mostCommonGradeCount = fGrades
        mostCommonGrade = "F"
}
}

let letterGrades = [aGrades, bGrades, cGrades, dGrades, fGrades]
let highScore = {
score: 0,
actualGrade: ""
}

for(let i = 0; i < letterGrades.length; i++){
   
    if(letterGrades[i].score > highScore.score)
    {
        highScore = letterGrades[i]
    }
}
console.log(highScore)
let percentageGrades = totalGradePoints / grades.length
console.log(mostCommonGrade, mostCommonGradeCount)
console.log(percentageGrades)
console.log(`The average percent is ${Math.ceil(percentageGrades)}`)
console.log(aGrades)
console.log(bGrades)
console.log(cGrades)

let cheerString = ""
for(let i = 2; i <= 8; i += 2){
    cheerString += `${i} `
}
cheerString += "Who do we appreciate?!"
console.log(cheerString)

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let sentence = ""
for(let i = 0; i < sentenceArray.length; i++){
    if((i % 3) === 0 && i !== 0){
        sentence += ` MOOOOOO ${sentenceArray[i]} `
    } else{sentence += ` ${sentenceArray [i]} `}
}
console.log(sentence)

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
for(let i=0; i < 4; i++){
    let string = `${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`

 if(beatles.members[i].death){
    string += `They died in ${beatles.members[i].death}`
 }
console.log(string)
console.log()
}