/**
 * Created by Пользователь on 11.07.2015.
 */
//
// Отправка асинхронного запроса.
//
function ajaxTest(input)
{
    var request = new XMLHttpRequest();
    request.open('GET', 'ajax.php?input=' + input);
    request.send();

    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
            processResult('&nbsp;&nbsp;&nbsp;&nbsp;' + request.responseText + '<br>');
    }
}

//
// Обработка результата.
//
function processResult(output)
{
    var div = document.getElementById('divResult');
    div.innerHTML += output;
}

//
// Точка входа.
//
window.onload = function()
{
    document.getElementById('btnRun').onclick = function()
    {
        var input = document.getElementById('inpText');
        ajaxTest(input.value);
    }
}
