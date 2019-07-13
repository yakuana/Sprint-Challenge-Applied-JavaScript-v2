// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector(".cards-container"); 

axios.get("https://lambda-times-backend.herokuapp.com/articles") 
    .then ((data) => {
        // successful 
        // console.log("response type and data: ", data.constructor.name, data) 

        // console.log("articles data:", data.data.articles.constructor.name, data.data.articles) 

        const articleObj = data.data.articles; 

        Object.entries(articleObj).forEach((articles) => {
            // console.log("articles type: ", articles.constructor.name);

            articles.forEach((articleArray) => {

                // articles is an array of length 2, the second element is an array of objects 
                if (articleArray.constructor.name == "Array"){
                    // console.log("articleArray: ", articleArray); 

                    // iterate over the array of objects 
                    articleArray.forEach((article) => { 
                        // console.log("article type and data: ", article.constructor.name, article); 

                        // console.log(`article contents: \n Author Name = ${article.authorName} \n Author Photo = ${article.authorPhoto} \n Headline = ${article.headline}`); 

                        // append card to cardsContainer 
                        cardsContainer.appendChild(createCard(article.authorName, article.authorPhoto, article.headline));
                    })
                }
            })
        })

      
    })

    .catch ((error) => {
        // unsuccessful 
        console.log("The API is currently down", error)
    }); 


function createCard(authorName, authorPhoto, authorHeadline) {

    // define new elements 
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const authorContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const author = document.createElement("span");

    // assign class names 
    card.classList.add("card"); 
    headline.classList.add("headline"); 
    authorContainer.classList.add("author"); 
    imgContainer.classList.add("img-container"); 

    // set image link 
    img.src = authorPhoto; 

    // set text content 
    headline.textContent = authorHeadline; 
    author.textContent = `By: ${authorName}`; 

    // create structure 
    card.appendChild(headline); 
    card.appendChild(authorContainer); 
    authorContainer.appendChild(imgContainer); 
    authorContainer.appendChild(author);
    imgContainer.appendChild(img); 

    return card; 
    
}