$(function(){

    $('form').on('submit', function(event) {
        event.preventDefault();
        var dateValue = $('.date-input').val();
        if (!dateValue) {
            alert('Please enter valid value');
            return;
        }
        var age = moment().diff(dateValue, 'years');
        alert(age);
    });

});