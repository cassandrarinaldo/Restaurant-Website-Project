import { fetchElixir, fetchData } from "./fetch.js";

let elixir = document.querySelector('.elixir-resultat');
let select = document.querySelector('#Elixir');
fetchData();

document.querySelector('#Elixir').addEventListener('change', function (evt) {
    if (elixir.children.length) elixir.removeChild(elixir.children[0])
    search(evt.target.value);
});

document.querySelector('#tabortElixirBarn').addEventListener('click', function (evt) {
    elixir.removeChild(elixir.children[0]);
})

function search(val) {
    fetchElixir(val);
}

function concatIng(array){
    var str = "";
    if(array.length == 0){
        str = "Unknown"
        return str;
    }
    else {
        for (let index = 0; index < array.length; index++) {
            if(index == array.length - 1)
                str += array[index].name + "."
            else
                str += array[index].name + ", ";
        }
        return str;
    }
}

export function nameArray(res){
    res.sort((item, item2) => item.name.localeCompare(item2.name))
    for (let index = 0; index < res.length; index++) {
        let option = document.createElement('option');
        let name = res[index].name;
        option.setAttribute('value',`${name}`);
        option.innerHTML = (`<option>${name}</options>`)
        select.appendChild(option);
    }
}

function concatInv(array){
    var str = "";
    if(array.length == 0){
        str = "Unknown"
        return str;
    }
    else{
        for (let index = 0; index < array.length; index++) {
            if(index == array.length - 1)
                str += array[index].firstName + " " + array[index].lastName + "."
            else
                str += array[index].firstName + " " + array[index].lastName + ", ";
        }
        return str;
    }   
}

function checkIfNull(value){
    if(!value){
        value = "Unknown";
        return value;
    }
    else
        return value; 
}

export function makeTable(res) {

    res.forEach(function(obj) {
        let table = document.createElement('table');
            table.setAttribute('class', 'elixir');
        var ingString = concatIng(obj.ingredients);
        var invString = concatInv(obj.inventors);

        table.innerHTML = (`
        <caption>${obj.name}</caption>
        <tr>
            <th>Effect</th>
            <td>${checkIfNull(obj.effect)}</td>
        </tr>
        <tr>
            <th>Side Effects</th>
            <td>${checkIfNull(obj.sideEffects)}</td>
        </tr>
        <tr>
            <th>Characteristics</th>
            <td>${checkIfNull(obj.characteristics)}</td>
        </tr>
        <tr>
            <th>Time</th>
            <td>${checkIfNull(obj.time)}</td>
        </tr>
        <tr>
            <th>Difficulty</th>
            <td>${checkIfNull(obj.difficulty)}</td>
        </tr>
        <tr>
            <th>Ingredients</th>
            <td>${ingString}</td>
        </tr>
        <tr>
            <th>Inventors</th>
            <td>${invString}</td>
        </tr>
        <tr>
            <th>Manufacturer</th>
            <td>${checkIfNull(obj.manufacturer)}</td>
        </tr>
        `);
        elixir.appendChild(table);
    });
}
