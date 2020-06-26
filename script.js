$(document).ready(function () {
    var m = moment();
    var currentTime = m.format("MMM Do YYYY, h:mm:ss a");
    var currentDate = m.format("MMMM Do YYYY, h:mm:ss a");
    var currentHour = m.hours();
    console.log("current hour: " , currentHour)

    $("#currentDay").text("Today's Date: " + currentDate);

    $(".saveBtn").on("click", function () {
        console.log("button");
        var click = $(this).attr("data-value")
        var eventInput = $(click).val();
        localStorage.setItem(click, eventInput)
    });

    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#13pm", "#14pm", "#15pm", "#16pm", "#17pm"]

    for (let i = 0; i < timeBlock.length; i++) {
        let savedEvent = $(".saved-event")
        console.log("looping time block to retrieve LS");
        console.log(timeBlock[i], localStorage.getItem(timeBlock))
        $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]));
    };

    function timeStyle() {
        for (let i = 6; i < 18; i++) {
            let hour = "#" + i;
            let scheduleHour = parseInt($(hour).attr("id"));
            $(hour).removeClass();
            if (scheduleHour > currentHour) {
                $(hour).attr("class", "row future");
            }
            else if (scheduleHour === currentHour) {
                $(hour).attr("class", "row present");
            }
            else if (scheduleHour < currentHour) {
                $(hour).attr("class", "row past");
            }
        };
    }
    timeStyle();
});