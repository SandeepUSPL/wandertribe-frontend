$('input[name="e-pass-photo"], .dob>div>input, input[name="gov-id-upload"], input[name="vehicle-rc"]').click(function() {
    $(this).attr('type', 'file');
    $(this).attr('accept', "application/pdf");
    $(this).css('background-color', 'white');
});
// $('.dob>div>input').click(function() {
//     $(this).attr('type', 'file');
//     $(this).attr('accept', "application/pdf");
// });
// $('input[name="gov-id-upload"]').click(function() {
//     $(this).attr('type', 'file');
//     $(this).attr('accept', "application/pdf");
// });
// $('input[name="vehicle-rc"]').click(function() {
//     $(this).attr('type', 'file');
//     $(this).attr('accept', "application/pdf");
// });

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {

    event.preventDefault();

    var request_type = document.querySelector('.request-type').value;
    var e_pass_name = document.querySelector('input[name="e-pass-name"]').value;

    var e_pass_gender = document.querySelector('.e-pass-gender').value;
    var e_pass_mobile = document.querySelector('input[name="e-pass-mobile"]').value;
    var e_pass_email = document.querySelector('input[name="e-pass-email"]').value;

    var e_pass_dob = document.querySelector('.dob>input').value;

    var from_house = document.querySelector('.travelling-from>input').value;
    var from_city = document.querySelector('.travelling-from .city').value;
    var from_pin = document.querySelector('.travelling-from .pin').value;
    var from_state = document.querySelector('.travelling-from select').value;

    var to_house = document.querySelector('.travelling-to>input').value;
    var to_city = document.querySelector('.travelling-to .city').value;
    var to_pin = document.querySelector('.travelling-to .pin').value;
    var to_state = document.querySelector('.travelling-to select').value;

    var gov_id = document.querySelector('.gov-id').value;
    var gov_id_no = document.querySelector('input[name="gov-id-no"]').value;

    var vehicle_no = document.querySelector('input[name="vehicle-no"]').value;

    var additional_person = document.querySelector('.additional-person input').value;

    var pass_valid_from = document.querySelector('.pass-validity>div input').value;
    var pass_valid_to = document.querySelector('.pass-validity>div:nth-of-type(2) input').value;

    var ePass_required = document.querySelector('.ePass-required').value;

    var check_terms = document.querySelector('.check-terms input').checked;

});