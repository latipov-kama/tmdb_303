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

  let dialog = document.querySelector("dialog");

  dialog.innerHTML = `
	<button class="close">X</button>
	<div class="search_modal">
	<div class="search_input">
	<input type="text" />
	</div>

				<div class="search_categories">
					<div class="active">Фильмы</div>
					<div>Сериалы</div>
					<div>Персоны</div>
				</div>

				<div class="search_content">
					<h2>Фильмы</h2>
					<div class="search_box">
						<div class="search_item">
							<img
								src="https://image.tmdb.org/t/p/w400/gybr2uUoI6yLnfv1s0wcJJ9HGmp.jpg"
								alt="poster"
								/>
								
								<div class="">
								<h3 class="name">Name</h3>
								<p class="genres">genres</p>
							</div>
						</div>
						<div class="search_item">
							<img
								src="https://image.tmdb.org/t/p/w400/gybr2uUoI6yLnfv1s0wcJJ9HGmp.jpg"
								alt="poster"
							/>

							<div class="">
							<h3 class="name">Name</h3>
							<p class="genres">genres</p>
							</div>
							</div>
							<div class="search_item">
							<img
							src="https://image.tmdb.org/t/p/w400/gybr2uUoI6yLnfv1s0wcJJ9HGmp.jpg"
								alt="poster"
							/>

							<div class="">
								<h3 class="name">Name</h3>
								<p class="genres">genres</p>
							</div>
						</div>
					</div>
					</div>
					</div>
					`;
  let img = document.querySelector("img.logo");
  let close = document.querySelector(".close");
  let search = document.querySelector(".search");

  search.onclick = () => {
    dialog.showModal();
  };
  close.onclick = () => {
    dialog.close();
  };
}
