function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "a vida é bela",
    autoStart: true,
    delay: 1,
    cursor: "",
  });


}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
