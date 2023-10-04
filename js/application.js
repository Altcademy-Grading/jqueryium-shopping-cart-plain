//This function is to update the total cost of the item
var calculateNewCost = function(){
    
    var qty = $('.qty').val();
    var price = $('.unit-price').val();
    var newCost = qty * price;
    $('.cost').html(newCost);
}

//This function is to update the GRAND TOTAL of all the items in the cart
var calculateGrandTotal = function(){
    var grandTotal = 0;
    $('.cost').each(function(){
        grandTotal += parseInt($(this).text());
    })
}

//Add item to cart
var addItemToCart = function(){
    var item = $('.item').val();
    var price = $('.price').val();
    var qty = $('.qty').val();
    var cost = qty * price;
    $('.item').val('');
    $('.price').val('');
    $('.qty').val('');
    $('.cost').html(cost);
}

// remove item from cart
var removeItemFromCart = function(){
    var item = $('.item').val();
    var price = $('.price').val();
    var qty = $('.qty').val();
    var cost = qty * price;
    $('.item').val('');
    $('.price').val('');
    $('.qty').val('');
    $('.cost').html(cost);
}

// clear cart
var clearCart = function(){
    $('.item').val('');
    $('.price').val('');
    $('.qty').val('');
    $('.cost').html('');
}


//Event Handlers
$(document).ready(function() {
    calculateNewCost();
});

$(document).ready(function(){
    calculateGrandTotal();
});    