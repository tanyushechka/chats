<?php
$maxId = $_POST['maxId'];//5
$strings = file('messages.txt');
$messages = array();
for($i = $maxId; $i < count($strings); $i++)
{
	$string = explode('___', $strings[$i]);
	$arr['date'] = $string[0]; 
	$arr['name'] = $string[1];
	$arr['text'] = $string[2];
	$messages[] = $arr;
}

echo json_encode($messages);
