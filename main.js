const endpoint = 'cities-pl.json';

const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.admin.match(regex);
    })
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
        <span class="name">${place.city}, ${place.admin}</span>
        <span class="name">${place.population}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);