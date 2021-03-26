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
var txtBlock = $('#block');
var currentDay = $('#now');
var root = $('#rootId');
var userId = $('.Id');


setInterval(function() {
var dayYear = moment().format("MMM Do YYYY");
$("#currentDay").text(dayYear);

}) 

 saveBtns.on("click", function() {

     var text = $(this).siblings('.description').val();
     var userId = $(this).parent().attr('id');
     localStorage.setItem(userId, text);
   
     
 })

function getStored() {
var usr = JSON.parse(localStorage.getItem('userId'));
var txt = JSON.parse(localStorage.getItem('text'));
}; 

 
 function changeTime() {
    
    for(i=0; i < 9; i++) {
        
        if (day < dayYear) {
            $(block).eq(i).addClass("past");
        
        } else if (day === dayYear) {
            $(block).eq(i).addClass("present");
        
        } else if (day > dayYear) {
           $(block).eq(i).addClass("future");
        
        }
        hour9++;
        rootId.append(hour);
   
}}