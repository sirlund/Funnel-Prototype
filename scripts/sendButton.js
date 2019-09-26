$(document).ready(function(){
  // disable send button
  $('#sendButton').attr('disabled',true);
  // enable send button if input has value
  $('.inputRequired').keyup(function(){
    if($(this).val().length !==0) {
      $('#sendButton').attr('disabled', false);
    } else {
      $('#sendButton').attr('disabled', true);
    }
  });
  // enable send button if option selected
  $('.optionRequired').click(function() {
    if($(this).is(':checked')) {
        $('#sendButton').attr('disabled', false);
    }
 });
});
