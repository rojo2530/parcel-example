import api from './api.js';

const { getFilms } = api();

const templateFilm = film => {
  return `
		<div class="card">
		<div class="card-image">
			<figure class="image is-4by3">
				<img src="../img/newhope.jpg" alt="Placeholder image">
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				
				<div class="media-content">
					<p class="title is-4">${film.title}</p>
				</div>
			</div>

			<div class="content">
				${film.opening_crawl}
				<br>
				
			</div>
		</div>
	</div>
	`
}


const renderFilmDom = async () => {
	try {
		const divContainer = document.querySelector('.column');
		const films = await getFilms();
		console.log(films);
		divContainer.innerHTML = templateFilm(films[0]);
	} catch (err) {
		console.error(err)
	}
}

export default renderFilmDom;

