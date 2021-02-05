//Question 1

const division = (a, b) => a % b;

//Question 2
/* Make a call to the following API endpoint:
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)

The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.*/

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
