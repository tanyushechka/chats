var _maxId;

$(document).ready(function()
{
	// Инициализация.
	_maxId = 0;

	chatRequest();
	// Запрашиваем сообщения каждые 2 секунды
	setInterval(chatRequest, 2000);
	
	$('#btnSend').click(function(event){
		var name = $('#name').val();
		var text = $('#text').val();
		
		if(name == '' || text == '')
			return false;

		$.post('add.php', {name: name, text: text}, function(){
			$('#text').attr('value', '');
		});
	});
});

function chatRequest()
{
	// Отправка запроса методом POST.
	$.post('get_json.php', {maxId: _maxId}, chatResult, 'json');
}

function chatResult(msgs)
{
	// Добавление новых сообщений в массив.
	for(var i = 0; i < msgs.length; i++)
	{		
		var html = '<b>' + msgs[i].name + '</b> ';
			html += msgs[i].date;
			html += '<br/>'; 
			html += msgs[i].text; 
			html += '<hr/>'; 

		$('#chat').prepend(html);
		
		_maxId++;	
	}
}
