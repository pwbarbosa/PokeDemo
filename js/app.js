const x = document.querySelector("#nextButton");
let num = 0;

x.addEventListener("click", () => {
    console.clear();
    num++;

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(res => res.json())
    .then(apple => {
        console.log("Pokemon's name is " + apple.name);
        console.log("Pokemon's weight in pounds is: " + apple.weight*.22);
        console.log("Pokemon's base hp is " + apple.stats[0].base_stat);
    })
})