$(document).ready(function(){$("[name='kidsinfo']").change(function(){var o=$(this).val(),n="";"haskids"==o&&(n="question-04a.html"),"nokids"==o&&(n="question-04b.html"),$("#goto").attr("action",n),console.clear(),console.log("Data will send to: "+n)})});