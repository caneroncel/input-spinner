$(document).ready(function(){

    /* Allow Only Numbers + Max / Min Values */
    $(".number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            // Display error message if needed
            return false;
        }
    }).on("focusout", function() {
        inputSpinner($(this), "checkval");
    });
    
    
    /* Input Spinner */
    $(".increase, .decrease").click(function() {

        var input = $(this).parents(".input-group").find("input");

        if($(this).hasClass("increase")) {
            inputSpinner(input, "increase");
        }

        if($(this).hasClass("decrease")) {
            inputSpinner(input, "decrease");
        }

    });

});

/* Input Spinner: Function */
function inputSpinner(input, action) {

    var id       = input.attr("data-id"),
        price    = parseFloat(input.attr("data-price")),
        newprice = 0,
        curval   = parseInt(input.val()),
        newval   = 0,
        max      = parseInt(input.attr("data-max")),
        min      = parseInt(input.attr("data-min"));

    newval = curval;

    // Check value
    if(action == "checkval") {
        if(curval > max) {
            newval = max;
        }
        else if(curval < min) {
            newval = min;
        }
        else {
            newval = curval;
        }
    }

    // Increase
    if(action == "increase") {
        if(curval >= max) {
            // silence is golden
        }
        else {
            newval = curval + 1;
        }
    }

    // Decrease
    if(action == "decrease") {
        if(curval <= min) {
            // silence is golden
        }
        else {
            newval = curval - 1;
        }
    }

    newprice = (price * newval).toFixed(2);
    // Show price if you have a price input: 
    // $(".price").val(newprice);

    input.val(newval);

}
