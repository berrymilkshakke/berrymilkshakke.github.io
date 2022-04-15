<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/pages/6.css" rel="stylesheet">
	<title>Мой счет</title>
</head>
<body>
	<div class="container">
		<div class="header">Мой счет - Добавить способ выплаты</div>
		<div class="main">
			<div class="title">Укажите реквизиты</div>
			<div class="form-title">Укажите ФИО владельца счета</div>
			<input type="text" placeholder="Например: Иванов Иван Иванович">
			<div class="form-title">Укажите название банка</div>
			<input type="text" placeholder="Например: Тинькофф">
			<div class="form-title">Укажите БИК банка</div>
			<input type="text" placeholder="Например: 123456789">
			<div class="form-title">Укажите номер счета</div>
			<input type="text" placeholder="Например: 123456789">
			<div class="form-title">Укажите номер налогоплательщика</div>
			<input type="text" placeholder="Например: 123456789">
			<div class="create-button">
				<button>Создать</button>
			</div>
		</div>
	</div>
</body>

<script>
	$('.menu a:contains("Выплаты")').addClass('active');
	$('.sidebar a:contains("Способы выплаты")').parents('li').addClass('active');
</script>
</html>