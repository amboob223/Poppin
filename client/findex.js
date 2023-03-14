//okay here we got to get the info make the body and dow a fetch to the server that will quert the database
const namee = document.getElementById("name");
const sectionnum = document.getElementById("sectionnum");
const sectioncost = document.getElementById("sectioncost");
const phone = document.getElementById("number");
const address = document.getElementById("address");
const button = document.getElementById("btn");
const getusers = document.getElementById("getusers");
const tbody = document.getElementById("tbody");
//now we got to make the event for the post
// post for clubs
button.addEventListener("click", async () => {
    try {

        const body = {
            name: namee.value,
            sectionnum: sectionnum.value,
            sectioncost: sectioncost.value,
            phone: phone.value,
            address: address.value
        }

        const response = await fetch("http://localhost:5000/clubs",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });
        namee.value = ""
        sectionnum.value = ""
        // parseInt(sectionnum.value)
        sectioncost.value = ""
        // parseInt(sectioncost.value)
        phone.value = ""
        address.value = ""
        alert("okay cool we will let you know who checking")
        console.log("work")
    } catch (error) {
        console.log(error)
    }
});

//for the users data
getusers.addEventListener("click", async () => {
    try {
        tbody.innerHTML = "";
        const allData = await fetch("http://localhost:5000/users")
        const newData = await allData.json();
        const yea = newData.rows // this is so we can use it 
        yea.map(info => {
            const row = document.createElement("tr");
            const name = document.createElement("td");
            const phone = document.createElement("td");
            const email = document.createElement("td");
            const paying = document.createElement("td");


            name.innerHTML = info.name
            phone.innerHTML = info.phone
            email.innerHTML = info.email
            paying.innerHTML = info.paying
            // const phone = data.innerHTML = info.phone
            // const email = data.innerHTML = info.email
            // const paying = data.innerHTML = info.paying



            row.appendChild(name)
            row.appendChild(phone)
            row.appendChild(email)
            row.appendChild(paying)


            tbody.appendChild(row);
        })
        console.log("work")
    } catch (error) {
        console.log("uhmun")
    }
})

