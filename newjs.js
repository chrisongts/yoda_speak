$(function (){

  $('.but').on('click', function(){
  // $('.text_process').click(function(){

  $.ajax({
    url: 'https://yoda.p.mashape.com/yoda?sentence=',
    headers: {'X-Mashape-Key': 'cDd44ochxsmshJX7cPisXpq7QsHfp154qBvjsnK9Rn0SS9elLe'},
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {sentence: $("#yoda_input").val()},
    datatype: 'json',
  }).always(alwaysFunction)
    .success(successFunction)
    .fail(failFunction);

function alwaysFunction(){
console.log("Happy!");
}

function successFunction(data){
  $("#yoda_reply").html(data);
}

function failFunction(jqXHR, textStatus, errorThrown){
console.log(errorThrown);
}
});
});
