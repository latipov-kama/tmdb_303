export function header() {
	let header = document.querySelector(".container");

	header.innerHTML = `
    <div class="logo">
			<img src="/logo.svg" alt="" />
			<img src="/social-links.svg" alt="" />
		</div>

		<nav>
			<a href="">Афиша</a>
			<a href="">Медиа</a>
			<a href="">Фильмы</a>
			<a href="">Актёры</a>
			<a href="">Новости</a>
			<a href="">Подборки</a>
			<a href="">Категории</a>
		</nav>

		<div class="btns">
			<button class="search">
				<img src="/search-vector.svg" alt="" />
			</button>
			<button class="sign-in">Войти</button>
		</div>
    `;

	let close = document.querySelector(".close");
	let search = document.querySelector(".search");
	let dialog = document.querySelector("dialog");

	search.onclick = () => {
		dialog.showModal();
	};

	close.onclick = () => {
		dialog.close();
	};
}
