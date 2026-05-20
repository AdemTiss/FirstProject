
const app = document.querySelector("#app")
const count = document.querySelector("#count")
const search = document.querySelector("#search")
let allUsers= []
const loadUsers= async ()=>{

    try{
        count.textContent="Loading..."
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!response.ok)
        throw new Error(`HTTP Error : ${response.status}`)
        const users = await response.json()
        allUsers=users.slice(0,10)
        
        const updatedUsers = mappingUsers(users)
        renderUsers(updatedUsers, allUsers.length)
    }
    catch(error){

        count.textContent="ERROR"
    }



}

const renderUsers= (users,n)=>{
    n>0?count.textContent=`showing ${n} users`:count.textContent="No users found"
    app.innerHTML=users

}
const mappingUsers = (usersList)=>{
    const mappedUsersList=usersList.slice(0,10).map(({name,email,address:{city},company})=>
            `
                <div>
                    name = ${name}
                    email = ${email}
                    address= ${city}  
                    comapny_name = ${company.name} 
                </div>
            
            `
        ).join("")
    return mappedUsersList
}

search.addEventListener("input",({target:{value}})=>{

    const updatedUsers=allUsers.filter(({name,email,address:{city},company})=>
        name.toLowerCase().includes(value.toLowerCase())
    )
    const sendingUsers = mappingUsers(updatedUsers)
    renderUsers(sendingUsers,updatedUsers.length)
    
})

loadUsers()