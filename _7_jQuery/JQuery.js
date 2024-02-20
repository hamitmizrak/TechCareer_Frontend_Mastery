// ### CSS-EVENT #####################
$(document).ready(function(){
    $("#btnChangeColor").css("display","block"); 
    $("#btnChangeColor").click(function(){
        $(".box").css("background-color","blue");
        $("#box1").css("border","1px solid yellow");
    });
}); //end document ready

// ### HTML #####################
$(document).ready(function(){
  $("#html_button").click(function(){
    $('#html_id').html("<p><b><mark>Diğer Satır</mark></b></p>")
  });
}); // end Html

// ### TEXT #####################
$(document).ready(function(){
  $("#text_button").click(function(){
    $('#html_id').html("<p>Text Diğer Satır</p>")
  });
}); // end Html

// ### ATTR #####################
$(document).ready(function(){
  $("#attr_button").click(function(){
    $('#attr_id').attr("href","https://www.google.com")
  });
}); // end Attr

