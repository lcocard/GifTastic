/* *********************** GifTastic - app.js ****************** */


var topics = [
    "Toronto",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Halifax",
    "Regina",
    "Winnipeg",
    "Saskatoon",
    "Sudbury",
    "Windsor",
    "Ottawa",
    "Quebec City",
    "Toronto",
    "Montreal",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "Halifax",
    "Regina",
    "Winnipeg",
    "Saskatoon",
    "Sudbury",
    "Windsor",
    "Ottawa",
    "Quebec City"
];
var b_topics = "";
var $topicsItem;
var $buttonsRow;
var new_topics = "";

/* ************************************************************************* */
/* *********************** Generate the buttons **************************** */
$(document).ready(function () {

    function button_create() {
        $(".buttonArea").empty();
        for (var i = 0; i < topics.length; i++) {
            // Get the topics value and store it in a variable
            b_topics = topics[i];
            console.log("b_topics = " + b_topics);
            // Create a var to hold a <p> tag to keep the topics value,
            // Then give it an ID in the form b_topics0, b_topics0, ..., b_topicsn using an increment
            // Then set the <p> tag as the value of this 
            $topicsItem = $("<p>");
            $topicsItem.attr("ID", "b_topics" + i);
            $topicsItem.text(b_topics);
            // Create a variable with a div for a bootstrap row
            // Add class="row justify-content-md-center"> to the row
            // Give the row a data attribute to add the topicsItem from above
            // Add div to container
            $buttonsRow = $("<button>");
            $buttonsRow.attr("type", "button");
            $buttonsRow.addClass("btn btn-success");
            $buttonsRow.attr("id", "topics_button_row" + i);
            $buttonsRow.attr("value", topics[i])
            $buttonsRow.append($topicsItem);
            $(".buttonArea").append($buttonsRow);

            //var buttonsCol = $("<div>");
            //buttonsCol.addClass("col-md-auto");
            //buttonsCol = buttonsCol.append(topicsItem);
            //$("#topics_button_row" + i).append(buttonsCol);
        }
    }

    // This function handles events where a  button is clicked
    $(".btn-topics-input").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#topics-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(city);
        button_create();
    });

    button_create();
});