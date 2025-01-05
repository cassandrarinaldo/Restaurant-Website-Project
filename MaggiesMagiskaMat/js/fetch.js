import { nameArray, makeTable } from "./utils.js";

export function fetchElixir(q) {
    fetch(`https://wizard-world-api.herokuapp.com/Elixirs?Name=${q}`)
    .then((res) => res.json())
    .then(makeTable)
}

export function fetchData() {
    fetch(`https://wizard-world-api.herokuapp.com/Elixirs`)
    .then((res) => res.json())
    .then(nameArray)
}