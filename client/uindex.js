//okay here we got to get the info make the body and dow a fetch to the server that will quert the database
const namee = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const paying = document.getElementById("paying");
const button = document.getElementById("btn");
const getclubs = document.getElementById("getclubs");
const cost = document.getElementById("cost")
const tbody = document.getElementById("tbody");
const secnum = document.getElementById("secnum");

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
        tbody.innerHTML = "";

        const allData = await fetch("http://localhost:5000/clubs")
        const newData = await allData.json();
        const yea = newData.rows // this is so we can use it 
        yea.map(info => {

            const row = document.createElement("tr");

            // row.classList.add("row")// this might be the error
            // this is how you increment the key
            const name = document.createElement("td");
            const sectionnum = document.createElement("td");
            const sectioncost = document.createElement("td");

            sectioncost.setAttribute("key", 3)
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
        console.log("uhnnnnnun")
    }
})




cost.addEventListener("click", () => {
    try {
        const rows = tbody.getElementsByTagName("tr"); // this gives back // We did this instead of queryselector getelementsbytagname gets all the tr in the tbody


        // this gives back a collection of html elements we can make an arrat

        // Create an array of objects, where each object represents a row
        // and contains the values of its cells as properties

        const rowObjects = Array.from(rows).map(row => { //we getting the individual td
            const cells = row.querySelectorAll("td"); // the rows and cels are node collections that go in the object of teh row object

            return {
                row,
                cells: Array.from(cells).map(cell => parseInt(cell.innerHTML)) // this is why we was gw
            }; //bascially the new app  maps an array with the row // we are
        });


        // Sort the rowObjects array based on the values in the "Gain" cell
        // its comparing the object and cells 

        rowObjects.sort((a, b) => b.cells[2] - a.cells[2]); // the [] two part is the cost column
        //sort changes this in place the cells[2] is the cost 

        // Remove the existing rows from the table
        tbody.innerHTML = "";

        // Add the sorted rows back to the table in the correct order
        //by doing a ffor each  and a rowobj is a hash with the ro and the cell the row 
        rowObjects.forEach(rowObj => {
            tbody.appendChild(rowObj.row);
        }); // these are the objects    

    } catch (error) {
        console.log(error)
    }

});

secnum.addEventListener("click", async () => {
    //again like before we got to get the rules and cells
    const rows = tbody.getElementsByTagName("tr");//we used this so we dont mess up bootstrap class

    const rowObjs = Array.from(rows).map(row => { // we have 4 because its tr

        const cells = row.querySelectorAll("td") // thois a node we got ti make an array to do sort// we use a query selector nd it can give all the classes or the tags directly
        //we use this
        return {
            row,
            cells: Array.from(cells).map(cell => parseInt(cell.innerHTML)) // those brackets are 
        }
    })


    rowObjs.sort((a, b) =>
        b.cells[1] - a.cells[1] // this is sortinng the hashes basd ib the second column 
    ) // it does this in place 

    tbody.innerHTML = ""

    rowObjs.forEach(rowObj => {
        tbody.appendChild(rowObj.row)
    })

})



// cost.addEventListener("dblclick", () => {
//     try {
//         const rows = tbody.getElementsByTagName("tr"); // We did this instead of queryselector getelementsbytagname gets all the tr in the tbody

//         console.log(rows)

//         // Create an array of objects, where each object represents a row
//         // and contains the values of its cells as properties
//         const rowObjects = Array.from(rows).map(row => { //we getting the individual td
//             const cells = row.querySelectorAll("td");


//             return {
//                 row,
//                 cells: Array.from(cells).map(cell => parseInt(cell.innerHTML))
//             }; //bascially the new app  males an array with the row
//         });

//         // Sort the rowObjects array based on the values in the "Gain" cell
//         rowObjects.sort((a, b) =>

//             console.log(b.cells[2]),// its comparing the object and cells
//             console.log(a.cells[2]),
//             a.cells[2] - b.cells[2]);

//         // Remove the existing rows from the table
//         tbody.innerHTML = "";

//         // Add the sorted rows back to the table in the correct order
//         rowObjects.forEach(rowObj => {
//             tbody.appendChild(rowObj.row);
//         });
//     } catch (error) {
//         console.log(error)
//     }

// });

