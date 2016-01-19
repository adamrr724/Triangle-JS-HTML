var triangle = function(side1, side2, side3) {

  if ( isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    return false;
  } else if ((side1 + side2 <= side3) || (side3 + side2 <= side2) || (side1 + side3 <= side2)) {
    return false;
  } else if((side1 === side2) && (side1 === side3)) {
    return true;
  } else if((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    return true;
  } else if((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
    return true;
  }

};

$(document).ready(function(event) {
    $("form#triangle").submit(function(event){
      var side1 = parseInt($("input#side1").val());
      var side2 = parseInt($("input#side2").val());
      var side3 = parseInt($("input#side3").val());
      var result = triangle(side1, side2, side3);

    if ( isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("Please write a valid input");
      $(".type").text("not a");
    } else if((side1 === side2) && (side1 === side3)) {
      $(".type").text("an equilateral");
    } else if (!result) {
      $(".type").text("not a");
    } else if((side1 === side2) || (side2 === side3) || (side1 === side3)) {
      $(".type").text("an isosceles");
    } else if((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
      $(".type").text("a scalene");
    }





    $("#result").show();
    event.preventDefault();

  });
});
