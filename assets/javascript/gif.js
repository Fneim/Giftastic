$(document).ready(function() {
        // Theme: MCU superheros
        // 1.Create a string array
        // 2.save to var topics

        var topics = ["Iron Man", "Captain America", "Black Widow", "Hawkeye", "Thor", "Loki", "Hulk", "Spiderman", "Winter Soldier", "Vision", "Black Panther"];

        // 4.make for loop that takes strings from topics and creates and 
        // append buttons to div
        var topic = $(this).attr("data-name");

        for (var i = 0; i < topics.length; i++) {

            var x = topics[i];
            //created buttion and assigned it a class
            var button = $("<button>").addClass("btn fancy-btns");
            //gave button attr data-name, which is the string in the array
            button.attr("data-name", x);
            button.val(x);
            button.text(x);
            $("#buttons-here").append(button);
            console.log(x);

        }



        // 5.Create onclick event, when click button, page grabs 10 static images from 
        // ajax response and displays them.
        // 6. Display gif rating

        $(document).on("click", function() {
            var ironman = "robert+downkey+jr";
            var cap = "captain+america";
            var widow = "black+widow";
            var hawkeye = "clint+barton";
            var thor = "thor";
            var loki = "loki";
            var hulk = "hulk";
            var spiderman = "spiderman";
            var bucky = "winter+soldier";
            var vision = "vision";
            var tchalla = "tchalla";

            var queryURL1 = "https://api.giphy.com/v1/gifs/search?q=" +
                    ironman + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL2 = "https://api.giphy.com/v1/gifs/search?q=" +
                    cap + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL3 = "https://api.giphy.com/v1/gifs/search?q=" +
                    widow + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL4 = "https://api.giphy.com/v1/gifs/search?q=" +
                    hawkeye + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL5 = "https://api.giphy.com/v1/gifs/search?q=" +
                thor + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL6 = "https://api.giphy.com/v1/gifs/search?q=" +
                loki + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL7 = "https://api.giphy.com/v1/gifs/search?q=" +
                hulk + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL8 = "https://api.giphy.com/v1/gifs/search?q=" +
                spiderman + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL9 = "https://api.giphy.com/v1/gifs/search?q=" +
                bucky + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL10 = "https://api.giphy.com/v1/gifs/search?q=" +
                vision + "&apikey=dc6zaTOxFJmzC&limit=10";
            var queryURL11 = "https://api.giphy.com/v1/gifs/search?q=" +
                tchalla + "&apikey=dc6zaTOxFJmzC&limit=10";

            function getData(queryURL) {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    // var p = $("<p>").text("Rating: " + results[i].rating);

                    var personImage = $("<img>");

                    personImage.addClass("image");

                    personImage.attr("src", results[i].images.fixed_height.url);

                    // $(gifDiv).append(p);
                    $(gifDiv).append(personImage);
                    $(".col-lg-8").prepend(gifDiv);

                }
            });
            }
            getData(queryURL1);
            getData(queryURL2);
            getData(queryURL3);
            getData(queryURL4);
            getData(queryURL5);
            getData(queryURL6);
            getData(queryURL7);
            getData(queryURL8);
            getData(queryURL9);
            getData(queryURL10);
            getData(queryURL11);
        });

    // 7. create form that takes user input
    // 8. push user input into topics
    // 9. function call that takes strings in topics and remakes the buttons

    })