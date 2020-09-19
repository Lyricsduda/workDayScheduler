$(document).ready(function () {

    var time = moment().hours();

    // Code for moment.js intergration in the header of the page
    function getDateTime() {
        $("#currentDay").text(moment().format('dddd, MMMM Do'));
    };

});