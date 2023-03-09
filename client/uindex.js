//okay here we got to get the info make the body and dow a fetch to the server that will quert the database
const namee = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const paying = document.getElementById("paying");
const button = document.getElementById("btn");

//now we got to make the event for the post
// post for clubs
button.addEventListener("click", async ()=>{
   try {
            
            const body =  {
                name:namee.value,
                phone:phone.value,
                email:email.value,
                paying:paying.value
            }

            const response = await fetch("http://localhost:5000/users",
            {
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)
            });
               namee.value =""
                phone.value=""
                email.value =""
                paying.value = ""
                
                alert("okay cool if selected the club will contact you")
            console.log("work")
   } catch (error) {
        console.log(error)
   }
});

//for the users
    
