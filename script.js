const TransformTemp= a => (a*(9/5)) + 32
console.log(TransformTemp(24))
const ReverseString = ch  => ch.split("").reverse().join("")
console.log(ReverseString("Hello"))
const LongerString = (ch1,ch2) => ch1.length>=ch2.length ? ch1:  ch2 
console.log(LongerString("adem","HHHHH"))


const fizzBuzz = n => n%3==0 ? "Fizz" : n%5==0 ? "FizzBuzz" : n 

console.log(fizzBuzz(11))

const maxNum = L => {
    let max = L[0]
    for( let i = 1 ; i <L.length ; i++){
        if (L[i] > max) {
            max = L[i];
        }

    }
    return max 
}
console.log(maxNum([1,2,3,4]))


const numVowels = ch => {
    let VowelsTotalOccurence = 0 
    for ( let i = 0 ; i < ch.length ; i++){
            if("aeoyi".includes(ch[i])){
                VowelsTotalOccurence+=1
            }
    }
    return VowelsTotalOccurence 

}

console.log(numVowels("adem"))

const noDuplicate = L => { 
    let L1=[]
    for ( let i = 0 ; i < L.length ; i++){
        // this one is not working and ikd why 
        if (!(L1.includes(L[i]))){
            L1.push(L[i])
        }
    

    }
    return L1
}

console.log(noDuplicate([1,2,2,3,4,1,3,2,4]))


const repeat= (func , n )=>{

    for (let i = 0 ; i< n ; i++){
        func()
    }

}

const compose = (func1,func2)=> n =>func2(func1(n))

const func1ThenFunc2 =  compose(func1,func2)