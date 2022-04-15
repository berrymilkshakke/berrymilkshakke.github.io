<link href="css/pages/9.css" rel="stylesheet">

<style>
	header .menu {
		display: none;
	}
</style>

<div class="table-wrap">
	<div class="table-sort">
		<div class="header">Реферальный код</div>
		<div class="sort-methods">
			<span class="sort-methods-label">Показывать:</span>
			<div class="dropdown" title="Выбрать">
				<span class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Все способы</span>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a class="dropdown-item" href="#">Способ 1</a></li>
					<li><a class="dropdown-item" href="#">Способ 2</a></li>
					<li><a class="dropdown-item" href="#">Способ 3</a></li>
				</ul>
			</div>
		</div>
		<div class="button-add">
			<button onclick="location.href = '/mlm/?page=1';">Добавить</button>
		</div>
		<div class="sort-fields">
			<span class="sort-fields-label">Сортировать:</span>
			<div class="dropdown" title="Выбрать">
				<span class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">По дате добавления</span>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					<li><a class="dropdown-item" href="#">Способ 1</a></li>
					<li><a class="dropdown-item" href="#">Способ 2</a></li>
					<li><a class="dropdown-item" href="#">Способ 3</a></li>
				</ul>
			</div>
		</div>

	</div>
	<div class="background-wrap">
		<div class="table-filter">
			<input type="text" class="form-control" placeholder="Поиск по кодам">
			<div class="dropdown" title="Выбрать">
				<span class="dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Действие</span>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
					<li><a class="dropdown-item" href="#">Действие 1</a></li>
					<li><a class="dropdown-item" href="#">Действие 2</a></li>
					<li><a class="dropdown-item" href="#">Действие 3</a></li>
				</ul>
			</div>
		</div>
		<table>
			<thead>
				<tr>
					<th><input type="checkbox" name=""></th>
					<th>Рефер</th>
					<th>Расположение</th>
					<th>Ссылка</th>
					<th>Код</th>
					<th>Зарегистрировано</th>
					<th>Метки</th>
					<th>Активен</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<?php for($i = 3; $i <= 11; $i++) { ?>
					<tr>
						<td><input type="checkbox" name=""></td>
						<td><span>Instagram</td>
						<td>Шапка профиля @username</td>
						<td>
							<div class="link">
								<div class="your-link" onclick="location.href = '/mlm/?page=2';">https://mlm.co/13asdq4a</div>
								<img src="/mlm/img/pages/Sticker.svg" alt="">
								<img src="/mlm/img/pages/Send.svg" alt="">
							</div>
						</td>
						<td>
							<div class="code">
								<div class="your-code">13asdq4a</div>
								<img src="/mlm/img/pages/Sticker.svg" alt="">
								<img src="/mlm/img/pages/Send.svg" alt="">
							</div>
						</td>
						<td>1 759</td>
						<td>Соц. сети, Instagram</td>
						<td>
							<label class="switch">
								<input type="checkbox">
								<span class="slider round"></span>
							</label>
						</td>
						<td>
							<div class="dropdown" title="Выбрать действие">
								<span class="dropdown-circles" id="dropdownMenuButton<?= $i ?>" data-bs-toggle="dropdown" aria-expanded="false">...</span>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton<?= $i ?>">
									<li><a class="dropdown-item" href="#">Действие 1</a></li>
									<li><a class="dropdown-item" href="#">Действие 2</a></li>
									<li><a class="dropdown-item" href="#">Действие 3</a></li>
								</ul>
							</div>
						</td>
					</tr>
				<?php } ?>
			</tbody>
		</table>
		<div class="table-pager">
			<div class="table-pages-counter">
				1-10 из 195 позиций
			</div>
			<div class="table-per-page">
				<div class="dropdown" title="Выбрать">
					<span class="dropdown-toggle" id="dropdownMenuButton100" data-bs-toggle="dropdown" aria-expanded="false">10</span>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton100">
						<li><a class="dropdown-item" href="#">10</a></li>
						<li><a class="dropdown-item" href="#">50</a></li>
						<li><a class="dropdown-item" href="#">100</a></li>
					</ul>
				</div>
			</div>
			<div class="table-pages">
				<a class="table-prev-next-page table-prev-page">
					<img src="/mlm/img/pages/prev.svg">
				</a>
				<a class="table-page-number active">1</a>
				<a class="table-page-number">2</a>
				<a class="table-page-number">3</a>
				<a class="table-page-number">4</a>
				<a class="table-page-number">5</a>
				<div class="table-pages-seperator">...</div>
				<a class="table-page-number">19</a>
				<a class="table-prev-next-page table-next-page">
					<img src="/mlm/img/pages/next.svg">
				</a>
			</div>
		</div>
	</div>
</div>

<script>
	$('.menu a:contains("Реферальный код")').addClass('active');
	$('.sidebar a:contains("Реферальный код")').parents('li').addClass('active');
</script>