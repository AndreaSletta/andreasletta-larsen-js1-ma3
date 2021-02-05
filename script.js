//Question 1

const division = (a, b) => a % b;

//Question 2

const url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating';

const videogameContainer = document.querySelector('.container');

async function makeApiCall() {
	try {
		const response = await fetch(url);

		const callResult = await response.json();

		const videogame = callResult.results;

		videogameContainer.innerHTML = '';

		for (let i = 0; i < 8; i++) {
			const name = videogame[i].name;

			const rating = videogame[i].rating;

			const tagCount = videogame[i].tags.length;

			videogameContainer.innerHTML +=
				'<div>' +
				'<ul>' +
				'<li>' +
				'Name: ' +
				name +
				'</li> ' +
				'<li>' +
				'Rating: ' +
				rating +
				'</li> ' +
				'<li>' +
				'Tags: ' +
				tagCount +
				'</li> ' +
				'</ul>' +
				'</div>';
		}
	} catch (error) {
		videogameContainer.innerHTML = 'Error loading page!';
	}
}

makeApiCall();
