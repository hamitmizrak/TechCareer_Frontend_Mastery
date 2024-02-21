// AJAX LISTLEMEK (GET)
$(document).ready(function () {

    // LISTLEMEK
    getResult()
    // Get Tıklandıktan sonra
    $("#ajaxGet").click( function () {
        getResult()
      }); //end click

    // KAYDETMEK
    //Post Tıklandıktan sonra
    $("#ajaxPost").click( function () {
        //alert("Ekleme")
        postResult()
      }); //end click
  }); //end document ready

  // GET
let getResult=()=>{
    let apiBaseUrl = "http://localhost:1111";
    let tbody = $( "#tbody_id");
    $.ajax({ method: "GET", url: apiBaseUrl+"/blog",
    }).done(function ( data) {
        //alert("Listeleme Başarılı")
        for ( let i = 0; i < 10; i++ ) {
          let trAppend ="";
          trAppend += 
          '<tr>'+
          '<td>'+ data[i].id+ '</td>'+
          '<td>'+ data[i].title+ '</td>'+
          '<td>'+ data[i].content+ '</td>'+
          '<tr>';
        tbody.append(trAppend);
        }
      }
    ).fail(function(){
        alert("Listeleme Sırasında Hata meydana geldi")
    });
}

// POST
let postResult=()=>{
    let apiBaseUrl = "http://localhost:1111";
    let tbody = $( "#tbody_id");
    let formData={
        "id":$("#post_id").val(),
        "title":$("#post_title").val(),
        "content":$("#post_content").val(),
    }
    $.ajax({ 
        method: "POST", 
        url: apiBaseUrl+"/blog",
        data:JSON.stringify(formData),
        contentType:"application/json",
        dataType:'json'
    }).done(function ( data) {
        alert("Ekleme Başarılı")
        for ( let i = 0; i < 10; i++ ) {
          let trAppend ="";
          trAppend += 
          '<tr>'+
          '<td>'+ data[i].id+ '</td>'+
          '<td>'+ data[i].title+ '</td>'+
          '<td>'+ data[i].content+ '</td>'+
          '<tr>';
        tbody.append(trAppend);
        }
      }
    ).fail(function(){
        alert("Ekleme Sırasında Hata meydana geldi")
    });
}