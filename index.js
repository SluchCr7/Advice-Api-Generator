let url = "https://api.adviceslip.com/advice";
let adviceId = document.getElementById("AdviceId");
let Advice = document.getElementById("Advice");
let button = document.getElementById("button")

button.addEventListener("click", () => {
    fetch(url)
        .then(response => response.json())
        .then(advice => {
            adviceId.innerHTML = advice.slip.id
            Advice.innerHTML = advice.slip.advice
        })
})