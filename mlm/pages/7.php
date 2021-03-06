<link href="css/pages/7.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

<div class="container">

	<div class="row">
		<div class="col">
			<div class="header">Мой счет - Выплаты</div>
		</div>
		<div class="col">
			<div class="calendar">
				<div class="date-wrap">
					<input type="text" class="date" value="<?= date('d.m.y') .' - '. date('d.m.y') ?>">
				</div>
				<div class="week-year">
					<div class="week">Неделя</div>
					<div class="month">Месяц</div>
					<div class="year">Год</div>
				</div>
			</div>
		</div>


	<div class="main">
		<div class="row">
			<div class="col-lg-4 gx-2">
				<div class="item balance">
					<div class="title">Ваш баланс</div>
					<div class="price">143 236 ₽</div>
				</div>
			</div>

			<div class="col-lg-8">
				<div class="row items">
					<div class="col">
						<div class="item all">
							<div class="title">Всего выведено</div>
							<div class="price">543 642 ₽</div>
						</div>
					</div>
					<div class="col application-bg">
						<div class="item application">
							<div class="title">Подать заявку на вывод</div>
							<button onclick="location.href = '/mlm/?page=4';">Подать заявку</button>
						</div>
					</div>
					<div class="col">
						<div class="item output-methods">
							<div class="title">Способы вывода</div>
							<div class="subtitle">
								<span>Основной способ вывода</span>
								<span>АО “Тинькофф Банк”</span>
							</div>
							<a href="#">Настроить</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="table-wrap">
	<div class="table-sort">
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
		<div class="sort-fields">
			<span class="sort-fields-label">Сортировать:</span>
			<div class="dropdown" title="Выбрать">
				<span class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">По дате выплаты</span>
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
					<th>Дата</th>
					<th>Способ выплаты</th>
					<th>Сумма Выплаты</th>
					<th>Статус</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<?php for($i = 3; $i <= 11; $i++) { ?>
					<tr>
						<td>1 апреля 2022</td>
						<td>Банковский перевод: АО “Тинькофф Банк”, номер счета: **** 0279</td>
						<td>16 402,68 <span>руб</span></td>
						<td><div class="transaction-status">Выполнено</div></td>
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

<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
<script>
	$('.menu a:contains("Выплаты")').addClass('active');
	$('.sidebar a:contains("Выплаты")').parents('li').addClass('active');
</script>