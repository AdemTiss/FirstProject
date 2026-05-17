const a = n=>  n*n

const isAdult = age => age >=18 
console.log(isAdult(30))


const applyAndLog=(func,n)=>{
        console.log("Input : " , n , ", result : ", func(n))



}


const square = n => n*n 

applyAndLog(square,5)


const Calculator=(a,b,T)=>{
    for ( let i = 0 ; i< T.length ; i++){
        T[i](a,b)

    }
}

const add =(a,b)=> console.log(a,"+",b,"=",a+b) 
const substract =(a,b)=> console.log(a,"-",b,"=",a-b) 
const multiply=(a,b)=> console.log(a,"*",b,"=",a*b) 
const divide =(a,b)=> console.log(a,"/",b,"=",a/b) 



Calculator(2,4,[add,substract,multiply,divide])