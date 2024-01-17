
const jokeElement =document.getElementById("joke-text")
const fetchJokeButton = document.getElementById("generate-btn")
const url = "https://v2.jokeapi.dev/joke/Any"



async function fetchRandomCodingJoke() {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        if (data.type === "single") {
            return data.joke;
        } else if (data.type === "twopart") {
            return `${data.setup} ${data.delivery}`;
        } else {
            throw new Error("Invalid joke format");
        }
    } catch (error) {
        console.error(error);
        return "Failed to fetch joke";
    }
}

function displayJoke(joke) {
    jokeElement.textContent = joke;
}

async function fetchAndDisplayJoke() {
    const joke = await fetchRandomCodingJoke();
    displayJoke(joke);
}




fetchJokeButton.addEventListener("click", fetchAndDisplayJoke);


