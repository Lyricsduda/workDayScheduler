$(document).ready(function () {

    var time = moment().hours();

    // Code for moment.js intergration in the header of the page
    function getDateTime() {
        $("#currentDay").text(moment().format('dddd, MMMM Do'));
    };

    // Function to add color cordination based on if the event is the present, past or, future
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

    // Function to store user data after refresh
    function storedInputs() {
        $(".event").each(function () {
            var inputId = $(this).attr("id");
            $(this).val(localStorage.getItem(inputId));
        });
    };

    // Function to save user data when save button is clicked
    $(".saveBtn").click(function () {
        var scheduledInputs = $(this).siblings(".event").val();
        var inputs = $(this).siblings(".event").attr("id");
        localStorage.setItem(inputs, scheduledInputs);
    });

    setInterval(getDateTime, 1000);
    colorRowSchedule();
    setInterval(colorRowSchedule, 1000);
    storedInputs();
});