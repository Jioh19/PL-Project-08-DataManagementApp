const APIKEY =
	'19cc466a8fc23dcf4f07faec1acb691816d2d1fe224c08f50d0824943e5ed30a';

function getLeagues() {
	const ligas = document.querySelector('.ligas');
	const dir =
		'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=' + APIKEY;
	fetch(dir)
		.then((response) => response.json())
		.then((league) => {
			league.result.forEach((liga) => {
				console.log(liga);
				ligas.innerHTML += `<img src="${
					liga.league_logo
				}" alt="Logo"> <img src="${
					liga.country_logo
				}" alt="Country"> ${JSON.stringify(league)}`;
			});
		})
		.catch((err) => {
			return Promise.reject(Error(err.message));
		});
}

getLeagues();
