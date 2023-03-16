const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "oGjbZxnhrizttqtnhw2I7g==RtgVvfEqh8DAuqfn";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function displayJoke() {
  try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerHTML = "Loading....";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerHTML = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
  }
}

btnEl.addEventListener("click", displayJoke);
