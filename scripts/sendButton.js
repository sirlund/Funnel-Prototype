$(document).ready(function(){
  $('#sendButton').attr('disabled',true);

  $('.inputRequired').keyup(function(){
    if($(this).val().length !=0) {
        $('#sendButton').attr('disabled', false);
    }
    else
    {
        $('#sendButton').attr('disabled', true);
    }
  });

  $('.optionRequired').click(function() {
    if($(this).is(':checked')) {
        $('#sendButton').attr('disabled', false);
    }
 });
});
