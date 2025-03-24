//
// FÆLLES
//

// Vi skal anvende data herfra: https://randomuser.me/

// Læs dokumentation og find ud af hvordan man får en user (5 min eller indtil en har et svar)

// Find ud af hvordan man får 50 users (5 min eller indtil en har et svar)

const basePoint = "https://randomuser.me/api/"
const limitResults ="?results=50&nat=dk"

// Fetch og log dem med fetch
// fetch(basePoint + limitResults)
// .then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log("FEJL!!!!", err))

// Her er det samme bare med async/await syntax

async function fetchUsers() {
  try {
    const res = await fetch(basePoint + limitResults);
    const data = await res.json();
    renderUsers(data)
    
  } catch (error) {
    console.log("FEJL", error)
  }
}
fetchUsers();

// Prøv nu at kopiere og omskrive det til async/await (Mark viser hvordan)

//
// I grupperne
//

// Prøv nu at anvende document.createElement(), .classlist.add(), .textContent og append() til at skabe en artikel med følgende struktur per user i results og append i .result:
function renderUsers(listOfUsers){
  console.log(listOfUsers)

  const userContainer = document.querySelector(".users")
  
  listOfUsers.results.forEach(user => {
    const article = document.createElement("article");
  
    const header = document.createElement("h4");
    header.classList.add("title")
    header.textContent =user.name.first;
    const img = document.createElement("img")
    img.src = user.picture.large;
  
  
 article.append(header,img)
 userContainer.append(article)
  
  })
}


  /* <article>
  <h4 class="title">NAVN</h4>
  <img src="URL" alt="ALT" />
</article>; */

// Prøv nu at udkommentere ovenfor og anvend istedet .innerHTML med strukturen fra index.html. Igen en per bruger i results

//
// FÆLLES
//

// Hvis vi kan nå det: implementér filtrering i form af en input[type="search"]
