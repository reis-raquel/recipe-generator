function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "dt3bbe9160a34o69bead9ceff8624028 ";
  let prompt = `User instructions: Generate a recipe using ${instructionsInput.value}`;
  let context =
    "you are a Top Chef, who loves to cook recipes from all the countries. Your mission is to generate a recipe from diferent countries in basic HTML. The recipe must have a name on top, a list of ingredients separate each line by </br> and prepation instructions, separate each line by </br>. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");

  recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe from ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
