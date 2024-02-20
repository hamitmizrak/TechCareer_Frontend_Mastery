// ### CSS-EVENT #####################
$(document).ready(
  function () {
    $(
      "#btnChangeColor"
    ).css(
      "display",
      "block"
    );
    $(
      "#btnChangeColor"
    ).click(
      function () {
        $(
          ".box"
        ).css(
          "background-color",
          "blue"
        );
        $(
          "#box1"
        ).css(
          "border",
          "1px solid yellow"
        );
      }
    );
  }
); //end document ready

// ### HTML #####################
$(document).ready(
  function () {
    $(
      "#html_button"
    ).click(
      function () {
        $(
          "#html_id"
        ).html(
          "<p><b><mark>Diğer Satır</mark></b></p>"
        );
      }
    );
  }
); // end Html

// ### TEXT #####################
$(document).ready(
  function () {
    $(
      "#text_button"
    ).click(
      function () {
        $(
          "#html_id"
        ).html(
          "<p>Text Diğer Satır</p>"
        );
      }
    );
  }
); // end Text

// ### ATTR #####################
$(document).ready(
  function () {
    $(
      "#attr_button"
    ).click(
      function () {
        $(
          "#attr_id"
        ).attr(
          "href",
          "https://www.google.com"
        );
      }
    );
  }
); // end Attr

// ### EFFECT(ANIMATE) #####################
$(document).ready(
  function () {
    $(
      "#effect_button"
    ).click(
      function () {
        //alert("Deneme");
        $(
          "#effect_id"
        )
          .delay(
            2000
          )
          .animate({
            left: "250px",
          });
      }
    );
  }
); // animate

// ### EFFECT(HIDE) #####################
$(document).ready(
  function () {
    $(
      "#hide_id"
    ).click(
      function () {
        $(
          "#effect_id"
        ).hide(
          2000
        );
      }
    );
  }
); // Hide

// ### EFFECT(SHOW) #####################
$(document).ready(
  function () {
    $(
      "#show_id"
    ).click(
      function () {
        //$("#effect_id").show(2000);
        $(
          "#effect_id"
        )
          .hide(0)
          .delay(
            2000
          )
          .show(0);
      }
    );
  }
); // Show

// ### FADE #####################
$(document).ready(
  function () {
    $(
      "#fadeout_id"
    ).click(
      function () {
        $(
          "#fade_parag_id"
        )
          .delay(
            4000
          )
          .fadeOut();
      }
    );
    $(
      "#fadein_id"
    ).click(
      function () {
        $(
          "#fade_parag_id"
        )
          .delay(
            4000
          )
          .fadeIn();
      }
    );
  }
); // end Fade Out

// ### EVENT #####################
$(document).ready(
  function () {
    $(
      "#click_event_id"
    ).click(
      function () {
        alert(
          "Dbl Event Çalıştı"
        );
      }
    );
  }
); // end Fade Out

$(document).ready(
  function () {
    $(
      "#dbl_click_event_id"
    ).dblclick(
      function () {
        alert(
          "Event Çalıştı"
        );
      }
    );
  }
); // end Fade Out

// ### MOUSE #####################
$(document).ready(
  function () {
    $(
      "#mouse_id"
    ).mouseup(
      function () {
        alert(
          "Mouse Çalıştı"
        );
        $(this).css("background-color","red")
      }
    );
  }
); // end Mouse

// ### KEYBOARD #####################
$(document).ready(
  function () {
    $(
      "#keyboard_id"
    ).keyup(
      function () {
        alert(
          "Keyboard Çalıştı"
        );
        $(this).css("background-color","yellow")
      }
    );
  }
); // end Keyboard