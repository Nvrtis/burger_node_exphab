$(document).ready(function() {

    $(".create-form").on("submit", (e) => {
        e.preventDefault();
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        );
    });


    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevouredState = {
            devoured: !devoured
        };

        // send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevouredState);
                // reload the page to get the updated list
                location.reload();
            }
        );
    });












})