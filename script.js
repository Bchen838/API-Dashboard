async function getDogImage() {
    const dogContainer = document.getElementById('dog-output');

    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    console.log(data);
    
    dogContainer.innerHTML = ''; 
    const img = document.createElement('img');
    img.src = data.message; 

    dogContainer.appendChild(img);
}

async function getCatImage() {
    const catContainer = document.getElementById('cat-output');

    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();

    console.log(data);
    
    catContainer.innerHTML = ''; 
    const img = document.createElement('img');
    img.src = data[0].url; 

    catContainer.appendChild(img);
}

async function getWeather() {
    const weatherContainer = document.getElementById('weather-output');

    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    const data = await response.json();

    console.log(data);

    weatherContainer.innerHTML = '';
    const temp = data.hourly.temperature_2m[0]; 
    const p = document.createElement('p');
    p.textContent = `Current temperature in Berlin: ${temp}°C`;
    
    weatherContainer.appendChild(p);
}


async function getExchangeRates() {
    const exchangeContainer = document.getElementById('currency-output');

    const response = await fetch('https://v6.exchangerate-api.com/v6/ab421b0e651ac5736309d373/latest/USD');
    const data = await response.json();

    console.log(data);
    exchangeContainer.innerHTML = '';

    const rates = data.conversion_rates;
    const p = document.createElement('p');
    p.textContent = `1 USD = ${rates.EUR} EUR`;
    
    exchangeContainer.appendChild(p);
}

async function getMovies() {
    const moviesContainer = document.getElementById('movies-output');

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8ca0e7aac7abc25e7b92e819d14d638d');
    const data = await response.json();

    console.log(data);
    moviesContainer.innerHTML = '';

    data.results.slice(0, 5).forEach(movie => {
        const p = document.createElement('p');
        p.textContent = movie.title;
        moviesContainer.appendChild(p);
    });

}

async function getGitHubUser() {
    const githubContainer = document.getElementById('github-output');

    const response = await fetch('https://api.github.com/users/Bchen838');
    const data = await response.json();

    console.log(data);
    
    githubContainer.innerHTML = `
    <img src="${data.avatar_url}" width="100">
    <h3>${data.login}</h3>
    <p>${data.bio || "No bio available."}</p>
    <p>Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
  `;
}

async function getJoke() {
    const jokeContainer = document.getElementById('joke-output');

    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    console.log(data);
    
    jokeContainer.innerHTML = `
    <p>${data.setup}</p>
    <p><em>${data.punchline}</em></p>
  `;
}

async function getPublicApiInfo() {
    const apiContainer = document.getElementById('publicapi-output');

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/meowth');
    const data = await response.json();

    console.log(data);
    apiContainer.innerHTML = '';

    const img = document.createElement('img');
    img.src = data.sprites.front_default; 
    apiContainer.appendChild(img);
    const p = document.createElement('p');
    p.textContent = `Pokémon: ${data.name}`;
    apiContainer.appendChild(p);

    const abilitiesTitle = document.createElement('h4');
    abilitiesTitle.textContent = "Abilities:";
    apiContainer.appendChild(abilitiesTitle);

  data.abilities.forEach(ability => {
    const p = document.createElement('p');
    p.textContent = ability.ability.name;
    apiContainer.appendChild(p);
  });
}