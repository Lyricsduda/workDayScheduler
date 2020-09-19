$(document).ready(function () {

    var time = moment().hours();

    // Code for moment.js intergration in the header of the page
    function getDateTime() {
        $("#currentDay").text(moment().format('dddd, MMMM Do'));
    };

    //Color coding schedule dependant upon hour
    function colorRowSchedule() {
        $("input").each(function () {
            var rowTimeHour = $(this).attr("id");
            var rowTimeNumber = parseInt(rowTimeHour);
            if (rowTimeNumber === time) {
                $(this).addClass("present");
            } else if (rowTimeNumber < time) {
                $(this).addClass("past");
            } else {
                $(this).addClass("future");
            };
        });
    };

});