<?php
$name = $_POST['name'];
$text = $_POST['text'];
	
if(($name != '') && ($text != ''))
{
	$f = fopen('messages.txt', 'a+');
	fwrite($f, date('Y-m-d H:i:s') . "___");
	fwrite($f, $name . "___");
	fwrite($f, $text . "\n");
	fclose($f);
}
?>
