// var code = function(message) {
//   if (square === rounded) {
//     return true;
//   }
//
// };

$(document).ready(function(event) {
    $("form#code").submit(function(event){
      var message = $("input#message").val();
      var messagefix = message.replace(/[^A-Za-z]/g,"");
      console.log("the input for messagefix is" + messagefix);
    //   var x = messagefix.length;
    //   var square = Math.sqrt(x);
    //   var rounded = Math.round(square);
    //   var result = code(message);
    //
    //
    // if (true) {
    //   $("#result").after();
    // }




    $("#result").show();
    event.preventDefault();

  });
});
