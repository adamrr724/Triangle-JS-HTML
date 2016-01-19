


$(document).ready(function(event) {
    $("form#code").submit(function(event){


      var message = $("input#message").val();
      var messagefix = message.toLowerCase().replace(/[^A-Za-z]/g,"");
      var x = messagefix.length;
      var square = Math.sqrt(x);
      var rounded = Math.ceil(square);
      var string = messagefix.split("");
      var incmessage = "";
      var finalmessage = "";

      for(var i = 0; i < rounded; i++) {
        for(var j = i; j < x; j += rounded){
          incmessage += string[j];
        }
      }

      for(var i = 0; i < x; i++) {
        finalmessage += incmessage[i];
        if ((i + 1) % 5 === 0) {
          finalmessage += " ";
        }
      }



    $(".result").text(finalmessage);
    $("#result").show();
    event.preventDefault();

  });
});
