$(function () {
    $(".change-devoured").on('click', function (event) {
        var id = $(this).data('id');
        console.log(id)
        $.ajax("/api/burgers/" + id, {
            type: 'PUT',
            devoured: true
        }).then(function () {
            console.log('devoured:' + id);
            location.reload();
        })
    })

    $('.create-form').on('submit', function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#burgerText").val().trim(),
            devoured: 0
        }
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type:'POST',
            data: newBurger
        }). then(function(){
            console.log('new burger:' + newBurger);
            location.reload();
        })
    })


















})