<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/pages/4.css" rel="stylesheet">
	<title>Мой счет</title>
</head>

<body>
	<div class="container">
		<div class="header">Мой счет - Заявка на вывод</div>
		<div class="main">
			<div class="title">Выберите способ выплаты</div>
			<form>
				<p><label><input type="radio" name="contact" value="men"> Банковский перевод: АО “Тинькофф Банк”, номер счета: **** 0279</label></p>
				<p><label><input type="radio" name="contact" value="woman"> Банковский перевод: ПАО “Сбербанк”, номер счета: **** 0695</label></p>
			</form>
			<div class="title">Сумма вывода</div>
			<div class="transfer-amount">
				<div class="form-title">Укажите сумму для перевода</div>
			<div class="main-input">
				<input type="text" placeholder="Введите сумму">
			</div>
			</div>
			<div class="available">
				<div class="available-title">Доступно для вывода:</div>
				<div class="rub">143 236 ₽</div>
			</div>
			<div class="title title-3">Подтверждение платежа</div>
			<div class="form-title">Номер для отправки СМС</div>
			<div class="your-number">+7 (999) 999-99-99</div>
			<div class="form-title sms">Введите код из СМС</div>
			<div class="main-input">
				<input type="text" placeholder="Введите код">
			</div>
			<div class="request">запросить код</div>
			<div class="request-button">
				<button>Подать заявку</button>
			</div>

		</div>
	</div>

<script>
	$('.menu a:contains("Выплаты")').addClass('active');
	$('.sidebar a:contains("Выплаты")').parents('li').addClass('active');
</script>
</body>
</html>