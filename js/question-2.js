const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=807d7a422b464af199ca1351daff9bf2";


async function getGames() {

    const response = await fetch(url);

    const data = await response.json();

    const array = data.results;

    console.log(data);
    
    var gamesContainer = document.querySelector(".container");


    for(let i = 0; i <= 7; i++) {
        console.log(array[i].name);
        console.log(array[i].rating);
        console.log(array[i].tags.length);

        gamesContainer.innerHTML = gamesContainer.innerHTML + "<h4>" + array[i].name + "</h4>" + "<p>" +  array[i].rating + "</p>" + array[i].tags.length;
    }


}

getGames();  