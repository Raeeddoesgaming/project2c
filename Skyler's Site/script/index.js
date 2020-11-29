let item = document.querySelector(".items")

let items = document.createElement("div")

items.setAttribute("style", "text-align:center;")
items.setAttribute( "class", "suggestions-area")

let SuggestionsArray = [
    "Origami Boat",
    "Origami Flapping Bird",
    "Origami Swan"
]

items.innerHTML = "We suggest " + SuggestionsArray[Math.floor(Math.random() * SuggestionsArray.length)] + " as your next tutorial";

document.body.appendChild(items)
