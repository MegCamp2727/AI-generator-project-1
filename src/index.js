function displayCocktail(response) {
new Typewriter('#cocktail', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateCocktail(event){
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "d90d35t42b8f499421c0b6fca6d4fo03";
let prompt = `User instructions are: Generate a cocktail recipe about ${instructionsInput.value} keep the resipe short and sweet and to the point.`;
let context = 
"You are a bartender who knows every cocktail recipe.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let cocktailElement = document.querySelector("#cocktail");
cocktailElement.classList.remove("hidden");
cocktailElement.innerHTML = `<div class="generating"> 🍹 Generating a cocktail recipe for ${instructionsInput.value}..</div>`;

axios.get(apiUrl).then(displayCocktail);
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);