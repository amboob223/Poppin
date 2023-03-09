//okay here we got to get the info make the body and dow a fetch to the server that will quert the database
const namee = document.getElementById("name")
const sectionnum = document.getElementById("sectionnum");
const sectioncost =document.getElementById("sectioncost");
const phone = document.getElementById("number");
const address = document.getElementById("address");
const button = document.getElementById("btn");
const getall = document.getElementById("getall");


//now we got to make the event for the post
// post for clubs
button.addEventListener("click", async ()=>{
   try {
            
            const body =  {
                name:namee.value,
                sectionnum:sectionnum.value,
                sectioncost:sectioncost.value,
                phone:phone.value,
                address:address.value
            }

            const response = await fetch("http://localhost:5000/clubs",
            {
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)
            });
               namee.value =""
                sectionnum.value =""
                sectioncost.value =""
                phone.value=""
                address.value= ""
                alert("okay cool we will let you know who checking")
            console.log("work")
   } catch (error) {
        console.log(error)
   }
});

//for the users data
getall.addEventListener("click", async()=>{
        try {
            const allData = await fetch("http://localhost:5000/users")
            const newData = await allData.json();
             const yea = newData.rows // this is so we can use it 
             yea.map(info=>{
                const row = document.createElement("tr");
                const data = document.createElement("th");
                    const name = data.innerHTML = info.name
                    const phone = data.innerHTML = info.phone

                    row.appendChild(name)
            
             })
             console.log("work")
            } catch (error){
                console.log("uhmun")
            }})
