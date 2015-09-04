<?php
// Кодировка.
header('Content-type: text/html; charset=utf-8');?>
<!DOCTYPE>
<html>
<head>
	<title>Чат</title>
	<meta content="text/html"; charset="utf-8" http-equiv="content-type"/>	
	<script type="text/javascript" src="jquery-1.6.min.js"></script>	
	<script type="text/javascript" src="chat.js"></script>		
</head>
<body>
	<h1>Чат</h1>
	<hr/>
	Имя:
	<input name="name" id="name"/>
	Текст:
	<input name="text" id="text"/>		
	<input type="submit" id="btnSend"/>
	<hr/>
	<div id="chat"></div>		
</body>
</html>