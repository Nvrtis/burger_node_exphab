$(document).ready(function() {
    
    // Send information about the new burger to the back end
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
                location.reload();
            });
    });

// Sends Update of information about the burger to the backend
    $(".eatburger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newDevouredState = {
            devoured: 1};
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    // sends a delete request to the backend
    $(".removeburger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})