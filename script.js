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
 });

function displayLocalStorage() {
    var hour = 9
}


 function changeTime() {
    
    for(i=0; i < 9; i++) {
        
        if (day < [i]) {
            $(block).eq(i).addClass("past");
        
        } else if (day === [i]) {
            $(block).eq(i).addClass("present");
        
        } else if (day > n[i]) {
           $(block).eq(i).addClass("future");
        
        }
        hour9++;
        rootId.append(block);
   
}

}



// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar // x //
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours // x //
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event // x //
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage // x //
// WHEN I refresh the page
// THEN the saved events persist
