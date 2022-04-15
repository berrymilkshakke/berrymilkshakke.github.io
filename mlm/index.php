<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href="css/style.css" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<script src="js/jquery.min.js"></script>
	<title>Сайт</title>
	<?php if(!isset($_GET['page'])) { ?>
		<script>location.href = '/mlm/login.html';</script>
	<?php } ?>
</head>
<body>
	<?php include 'header.php'; ?>
	<div class="body-wrap">
		<?php
		include 'sidebar.php';
		if(!empty($_GET['page'])) {
			echo '<div class="page">';
				include 'pages/'.$_GET['page'] . '.php';
			echo '</div>';
		}
		?>
	</div>
</body>
</html>