<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/pages/5.css" rel="stylesheet">
	<title>Мой счет</title>
</head>
<body>
	<div class="container">
		<div class="header">Мой счет - Добавить способ выплаты</div>
		<div class="main">
			<div class="title">Выберите способ выплаты</div>
			<div class="item">
				<label><input type="radio" name="contact" value="men"> Банковский перевод</label>
				<ul>
					<li>Получите оплату в течение 5–7 рабочих дней</li>
					<li>В выходные и праздничные дни время обработки может увеличиться</li>
					<li>Без сборов</li>
				</ul>
			</div>
			<div class="item">
				<label><input type="radio" name="contact" value="men"> Служба быстрых платежей</label>
				<ul>
					<li>Получите оплату в течение 1-2 рабочих дней</li>
					<li>Комиссия 10%</li>
				</ul>
			</div>
			<div class="item">
				<label><input type="radio" name="contact" value="men"> Банковская карта</label>
				<ul>
					<li>Получите оплату в течение 1-2 рабочих дней</li>
					<li>Комиссия 10%</li>
				</ul>
			</div>
			<button onclick="location.href = '/mlm/?page=6';">Продолжить</button>
		</div>
	</div>
<script>
	$('.menu a:contains("Способы выплаты")').addClass('active');
	$('.sidebar a:contains("Способы выплаты")').parents('li').addClass('active');
</script>
</body>
</html>