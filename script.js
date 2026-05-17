const a = n=>  n*n
const divide =(a,b) => {
    console.log("This is a division function")
    return a/b
}
console.log(divide(9,3));
const isAdult = age => age >=18 
console.log(isAdult(30))


const applyAndLog=(func,n)=>{
        console.log("Input : " , n , ", result : ", func(n))



}


const square = n => n*n 

applyAndLog(square,5)


const applyALL = (n , T) =>{

    for (let  i = 0 ; i <T.length ; i++ ){
            console.log(T[i].name,"(",n,")=",T[i](n))


    }


}
applyALL(4,[isAdult,square])
