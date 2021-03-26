var saveBtns = $('.saveBtn');
var localStorage = $('.localStorage');
var day = $('#currentDay');
var hour9 = $('#hour9');
var hour10 = $('#hour10');
var hour11 = $('#hour11');
var hour12 = $('#hour12');
var hour1 = $('#hour1');
var hour2 = $('#hour2');
var hour3 = $('#hour3');
var hour4 = $('#hour4');
var hour5 = $('#hour5');
var currentTime = $([i]);
var userId = $('.Id');


setInterval(function() {
var dayYear = moment().format("MMM Do YYYY");
$("#currentDay").text(dayYear);

}) 

 saveBtns.on("click", function() {

     var text = $(this).siblings('.description').val();
     var userId = $(this).parent().attr('id');
     localStorage.setItem(userId, text);
   
     
 });



 
   
function changeTime() {
    var firstHour = 9;
        if (firstHour  < [i]) {
          $(querySelector.css(".past")); 
        } else if (firstHour  == [i]) {
            $(querySelector.css(".present"));
        } else if (firstHour  > [i]) {
            $(querySelector.css(".future"));
        }
     
    }
