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

/* ************************************************************************* */
/* *********************** Generate the buttons **************************** */

for (var i = 0; i < topics.length; i++) {
    // Get the topics value and store it in a variable
    var b_topics = topics[i];
    console.log("b_topics = " + b_topics);
    // Create a var to hold a <p> tag to keep the topics value,
    // Then give it an ID in the form b_topics0, b_topics0, ..., b_topicsn using an increment
    // Then set the <p> tag as the value of this 
    var topicsItem = $("<p>");
    topicsItem.attr("ID", "b_topics" + i);
    topicsItem.text(b_topics);
    // Create a variable with a div for a bootstrap row
    // Add class="row justify-content-md-center"> to the row
    // Give the row a data attribute to add the topicsItem from above
    // Add div to container
    var buttonsRow = $("<button>");
    buttonsRow.attr("type", "button");
    buttonsRow.addClass("btn btn-success");
    buttonsRow.attr("id", "topics_button_row" + i);
    buttonsRow.append(topicsItem);
    $(".buttonArea").append(buttonsRow);

    //var buttonsCol = $("<div>");
    //buttonsCol.addClass("col-md-auto");
    //buttonsCol = buttonsCol.append(topicsItem);
    //$("#topics_button_row" + i).append(buttonsCol);
}