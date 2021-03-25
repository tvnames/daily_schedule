var saveBtns = $('.saveBtn');
var localStorage = $('.localStorage');
var day = $('.currentDay');




setInterval(function() {
var dayYear = moment().format("MMM Do YYYY");
$("#currentDay").text(dayYear);

})

saveBtns.on("click", function() {

    var text = $(this).siblings('.description').val();
    var Id = $(this).parent().attr('id');
    localStorage.setItem(getId, text);
});


// function renderSchedule() {
//     var textKey = hour10.attr("id");
//     var value = localStorage.getItem(textKey);
//     hour10.find(".description").val(value);

// };
// renderSchedule();
// getting something from local storage
// console.log key
