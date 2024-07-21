function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "dt3bbe9160a34o69bead9ceff8624028 ";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "you are a biggest fan ever of the Game of Thrones series,  who loves to write short poems themed Game of Thrones. Your mission is to generate a FOUR LINES poem in basic HTML.Separate each line with a <br>.  Sign the poem with `SheCodes AI` at the END of the poem, inside a <strong> element. Do not put a tilte on the poem. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
