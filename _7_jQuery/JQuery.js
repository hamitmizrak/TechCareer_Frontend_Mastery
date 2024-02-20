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
}); // end Text

// ### ATTR #####################
$(document).ready(function(){
  $("#attr_button").click(function(){
    $('#attr_id').attr("href","https://www.google.com")
  });
}); // end Attr

// ### EFFECT(ANIMATE) #####################
$(document).ready(function(){
  $("#effect_button").click(function(){
    //alert("Deneme");
    $("#effect_id").delay(2000).animate({left: '250px'});
  });
}); // animate

// ### EFFECT(HIDE) #####################
$(document).ready(function(){
  $("#hide_id").click(function(){
    $("#effect_id").hide(2000);
  });
}); // Hide


// ### EFFECT(SHOW) #####################
$(document).ready(function(){
  $("#show_id").click(function(){
    $("#effect_id").show(2000);
  });
}); // Show

// ### FADE #####################
$(document).ready(function(){
  $("#fadeout_id").click(function(){
    $('#fade_parag_id').delay(4000).fadeOut();
  });
  $("#fadein_id").click(function(){
    $('#fade_parag_id').delay(4000).fadeIn();
  });
}); // end Fade Out

