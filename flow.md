club 
    - a post request of all the data
    - a get request of who wants to purchase a table  with phone name and email 

        -db here for clubs
            name,number of sections,cost of section,phone number,address

user
    - a post request of name phonoe email - how much they are paying
    - a get request of the avable clubs and the phone number an address
            -db for users
                name,phone,email,howmuch paid

    -flow
        -when app start its on home then ask if its a club or user
        -if it a club they go to club page and post info and can hit a button to see who want the section in datbase
        -if its a user they can see avaiable clubs and how many sections are available and go to a pay page

   
   
   on user side we might have to make methods that react with the datbase for example when a section is bought I need the number of sections in the database to be reduced so I will make a function in js so that when one is bouth we fetch to the database and get the availbe number then we reuce by one and mkae that the new number in the database

