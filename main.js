//Get Btn and Create Function
document.getElementById('myBtn').addEventListener('click', getData);
document.getElementById('getMale').addEventListener('click', getMale);


function getData() {
    //console.log('test');


    //Get API
    fetch('https://randomuser.me/api/?results=100')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        let author = data.results;
        // console.log(author);

        //Get Data Value
        let output = "<h2><center>Get User Data</center></h2>";

        //Get Data Loop Through
        author.forEach(function (lists){
            output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                        <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                        <li class="list-group-item"><img src="${lists.picture.large}"></li>
                        <li class="list-group-item"><h2>Phone Number: ${lists.cell}</h2></li>
                        <li class="list-group-item"><h2>Email ID: ${lists.email}</h2></li>
                        <li class="list-group-item"><h2>Age: ${lists.dob.age}</h2></li><br><br>
                        </ul>
                    </div>
                </div>
            
            `;
        });

        document.getElementById('output').innerHTML = output;

    });
}



//Function for getMale

function  getMale() {
    //Get API
    fetch('https://randomuser.me/api/?results=100')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        const male = data.results;

        if(male.gender === "male") {
            output += `
            <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                    <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                    <li class="list-group-item"><img src="${lists.picture.large}"></li>
                    <li class="list-group-item"><h2>Phone Number: ${lists.cell}</h2></li>
                    <li class="list-group-item"><h2>Email ID: ${lists.email}</h2></li>
                    <li class="list-group-item"><h2>Age: ${lists.dob.age}</h2></li><br><br>
                    </ul>
                </div>
            </div>
        
        `;
        }


        let output = "<h2><center>Get User Data</center></h2>";


                
        //Show on our screen all data

        document.getElementById('output').innerHTML = output;
        
    });


}