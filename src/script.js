const APIKEY =
	'19cc466a8fc23dcf4f07faec1acb691816d2d1fe224c08f50d0824943e5ed30a';

function getLeagues() {
	const ligas = document.querySelector('.ligas');
	const dir =
		'https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=' +
		APIKEY +
		'&from=2023-09-20&to=2023-10-01';
	fetch(dir)
		.then((response) => response.json())
		.then((league) => {
			league.result.forEach((liga) => {
				console.log(liga);

				ligas.innerHTML += `
          <div class="card">
            <div class="card-header">
              <div class="card-inner">
                <img class="logo" src="${liga.home_team_logo}" alt="Home">
                <p>${liga.event_home_team}</p>
              </div>
              <div class="card-inner">
                <img class="logo" src="${liga.league_logo}" alt="League">
                <p>${liga.event_ft_result}</p>
              </div>
              <div class="card-inner">
                <img class="logo" src="${liga.away_team_logo}" alt="Away">
                <p>${liga.event_away_team}</p>
              </div>
          </div>`;
			});
		})
		.catch((err) => {
			return Promise.reject(Error(err.message));
		});
}

getLeagues();
