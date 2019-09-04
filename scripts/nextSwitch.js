$(document).ready(function() {

  //add change listener to all inputs with name account
  $("[name='radioinfo']").change(function() {
    //get current radio button value
    var ch = $(this).val();
    var act = "";
    //determine pro || perso
    if (ch == "haskids") act = "question-04a.html";//set url
    if (ch == "nokids") act = "question-04b.html";//set url
    if (ch == "athlete") act = "sorry.html";//set url
    if (ch == "amateur") act = "question-06.html";//set url
    if (ch == "once") act = "question-07a.html";//set url
    if (ch == "weekly") act = "question-07b.html";//set url

    $("#goto").attr("action", act);//set action url
    console.clear();
    console.log("Data will send to: " + act);
  });
});