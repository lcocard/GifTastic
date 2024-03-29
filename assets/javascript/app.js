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
    "North Bay",
    "Sudbury",
    "Windsor",
    "Ottawa",
    "Quebec City"
];
var b_topics = "";
var $topicsItem;
var $buttonsRow;
var new_topics = "";
var random = Math.floor(Math.random() * 25) + 1;
console.log("random1 = " + random);

/* ************************************************************************* */
/* *********************** Generate the buttons **************************** */
$(document).ready(function () {

    // Function used to generate buttons for the topic list
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
        }
    }

    // Add topics to the array on the event of a user topic input and click on the submit button
    $(".btn-topics-input").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var city = $("#topics-input").val().trim();

        // Adding city from the textbox to our array
        topics.push(city);
        button_create();
    });

    // Display 10 still images from Giphy for each click on a button from the buttonArea 

    $(".buttonArea").on("click", ".btn", function (event) {
        var this_city = $(this).val();
        console.log("this_city = " + this_city);
        random = random + 10;
        console.log("random2 = " + random);
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + this_city + '&api_key=3KY5sb3wfLdn3RUY2623lLJC7WQ4qiJA&limit=10&rating=pg&offset=' + random + '';

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            console.log("success got data", response);
            var gifs = response.data;
            console.log("gifs.length = " + gifs.length);
            // Generating a div for each gif and adding rating, still and animated attributes
            for (var i = 0; i < gifs.length; i++) {
                var $gifDiv = $("<div>");
                $gifDiv.addClass("gifDiv");
                // Get the gif rating value and store it in a variable
                gifRating = gifs[i].rating;
                var gifRatingUpper = gifRating.toUpperCase();
                console.log("gif rating = " + gifRatingUpper)

                // Create a var to hold a <p> tag to keep the rating for the gif results,
                // Then give it a class gifsRating
                // Then set the <p> tag as the value of this 
                $gifRatingItem = $("<p>");
                $gifRatingItem.addClass("gifsRating");
                $gifRatingItem.text("Rating: " + gifRatingUpper);

                // Get the gif title value and store it in a variable
                gifTitle = gifs[i].title;
                console.log("gif title = " + gifTitle)

                // Create a var to hold a <p> tag to keep the title for the gif results,
                // Then give it a class gifsTitle
                // Then set the <p> tag as the value of this 
                $gifTitleItem = $("<p>");
                $gifTitleItem.addClass("gifsTitle");
                $gifTitleItem.text("Title: " + gifTitle);

                // Create a variable to hold an <img> for the gifs resulted from the search
                // Add src, data-still, data-animate and data-state attributes and "gifs" class
                // Add div to giphyArea at the top (prepend)
                var $gifIMG = $("<img>");
                $gifIMG.attr("src", gifs[i].images.fixed_height_still.url);
                $gifIMG.attr("data-still", gifs[i].images.fixed_height_still.url);
                $gifIMG.attr("data-animate", gifs[i].images.fixed_height.url);
                $gifIMG.attr("data-state", "still");
                $gifIMG.attr("gifTitle", gifs[i].title);
                $gifIMG.attr("ID", "gif");
                $gifDiv = $gifDiv.append($gifIMG);
                $gifDiv.prepend($gifRatingItem);
                $gifDiv.prepend($gifTitleItem);
                $(".giphyArea").prepend($gifDiv);

                // Toggle state animated/still images

                $("#gif").on("click", function (event) {
                    event.preventDefault();
                    var gifsState = $(this).attr("data-state");
                    if (gifsState === "still") {
                        $(this).attr("data-state", "animate");
                        $(this).attr("src", $(this).attr("data-animate"));
                    } else {
                        $(this).attr("data-state", "still");
                        $(this).attr("src", $(this).attr("data-still"));
                    }

                });

                var random = Math.floor(Math.random() * 9) + 1;
                console.log("random3 = " + random);
            }
        });

    });

    button_create();
});