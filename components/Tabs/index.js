// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics")

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then ((data) => {
        // successful 
        // console.log("returned data and data type:", data.constructor.name, data); 

        const topicsArray = data.data.topics; 
        // console.log("topics array:", data.data.topics.constructor.name, topicsArray); 

        topicsArray.forEach((element) => {
            // define element  
            const tab = document.createElement("div"); 

            // add tab class 
            tab.classList.add("tab"); 

            // add text content using "element" arguement 
            tab.textContent = element; 

            // append element to topics div 
            topics.appendChild(tab); 
        })

    })

    .catch ((error) => {
        // unsuccessful 
        console.log("The API is currently down.", error)
    });