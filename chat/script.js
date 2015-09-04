$(document).ready(function(){
    $('#inpText').keydown(function(){
        if (event.keyCode == 13 && input != '') {
            var input = $('#inpText').val();
            $('#inpText').val('');
            ajaxTest(input);
        }
    })



function ajaxTest(input) {
    var counter = 0;
    var request = new XMLHttpRequest();
    request.open('GET', 'ajax.php?input=' + input);
    request.send();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            printMessage('request', input);
            printMessage('response', request.responseText);
        }
    }
}



function printMessage(type, text) {
    var imgSrc = type == 'request' ? 'img/Boy-01-48.png' : 'img/Girl-01-48.png';
    var panelClass = type == 'request' ? 'bg-success' : 'bg-info';
    $('#chat')
        .prepend($('<div class="media">').addClass(type).css({
                'width': '90%'
            })
            .append($('<div class="media-left">')
                .append($('<img class="media-object">').attr('src', imgSrc))));

    $('.media:first').append($('<div class="media-body">').addClass(panelClass).html(text));
}


// function printMessage(type, text) {
//     var imgSrc = type == 'request' ? 'img/Boy-01-48.png' : 'img/Girl-01-48.png';
//     var panelClass = type == 'request' ? 'bg-success' : 'bg-info';
//     if(type == 'request') {
//         $('#chat').prepend($('<div class="dialogue">'));
//     }
//     $('.dialogue:first').append($('<div class="media">').addClass(type));
//     var cond = '.'+type+':first';
//     $('.media').filter(cond)
//     .append($('<div class="media-left">').append($('<img class="media-object">').attr('src', imgSrc)));
   
//     $('.media').filter(cond).append($('<div class="media-body">').addClass(panelClass).html(text));
// }

})