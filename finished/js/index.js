var $ = require('jquery');
var calculator = require('./calculator');

$(function(){

    $('form').on('submit', function(event) {
        event.preventDefault();
        var dateValue = $('.date-input').val();
        if (!dateValue) {
            alert('Please enter valid value');
            return;
        }
        var age = calculator.getAge(dateValue);
        alert(age);
    });

});