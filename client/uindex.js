//okay here we got to get the info make the body and dow a fetch to the server that will quert the database
const namee = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const paying = document.getElementById("paying");
const button = document.getElementById("btn");
const getclubs = document.getElementById("getclubs");

//now we got to make the event for the post
// post for clubs
button.addEventListener("click", async () => {
    try {

        const body = {
            name: namee.value,
            phone: phone.value,
            email: email.value,
            paying: paying.value
        }

        const response = await fetch("http://localhost:5000/users",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
        namee.value = ""
        phone.value = ""
        email.value = ""
        paying.value = ""

        alert("okay cool if selected the club will contact you")
        console.log("work")
    } catch (error) {
        console.log(error)
    }
});

//for the users
//for the users data
getclubs.addEventListener("click", async () => {
    try {
        const allData = await fetch("http://localhost:5000/clubs")
        const newData = await allData.json();
        const yea = newData.rows // this is so we can use it 
        yea.map(info => {
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const sectionnum = document.createElement("td");
            const sectioncost = document.createElement("td");
            const phone = document.createElement("td");


            name.innerHTML = info.name
            phone.innerHTML = info.phone
            sectioncost.innerHTML = info.sectioncost
            sectionnum.innerHTML = info.sectionnum

            // const phone = data.innerHTML = info.phone
            // const email = data.innerHTML = info.email
            // const paying = data.innerHTML = info.paying



            row.appendChild(name)
            row.appendChild(sectionnum)
            row.appendChild(sectioncost)
            row.appendChild(phone)



            tbody.appendChild(row);
        })
        console.log("work")
    } catch (error) {
        console.log("uhmun")
    }
})


