$(document).ready(function() {
  $("img").attr("alt", function() {
      var alt = $(this).attr("alt");
      if(alt == "") {
	      alert("Image missing alternative text");
      }

      var alternativeList = [];

      $("img").each(function(){
        var alts = $(this).attr("alt");
        alternativeList.push(alts);
        // alert(alternativeList);
    });

    $("img").each(function() {
        var alter = $(this).attr("alt");

        for(var i = 0, l = alternativeList.length; i < l; i++ ) {
          if(alter, alternativeList) {
            alert("Image has alternative text duplicate");
          } else {
            alert(alternativeList);
          }
          alert(alter);
          alert(alternativeList);

        }
      // }


        // if($.inArray(alter, alternativeList) == 0) {
        //   // alert("Image has alternative text duplicate");
        // } else {
        //   alternativeList.push(alter);
        //   // alert("okay");
        // }
        // alert(alternativeList);
      // });
        });



//     for ( var i = 0, l = alternativeList.length; i < l; i++ ) {
//       if(!jQuery.inArray(i, alternativeList)) {
//         var alternative = $(this);
//         alternativeList.push(alternative);
//         alert(alternative);
//       }
//       else if(jQuery.inArray(i, alternativeList)) {
//         alert("Image has alternative text duplicate");
//       }
// }



      // if(jQuery.inArray(alt, alternativeList) <= 1 ) {
      //   alert("Image has alternative text duplicate");
      // } else {
      //   alert("okay");
      // }
      //   alert(alternativeList);
      });




    $("a").attr("href", function() {
        var link = $(this).attr("href");
        if(link == "") {
          alert("Link Error");
        }
    });
  $("html").attr("lang", function() {
      var lang = $(this).attr("lang");
      if(lang == "") {
        alert("Missing language");
      }
  });
  $("button").html(function() {
      var button_text = $(this).html();
      if(button_text == "") {
        alert("Missing button text");
      }
  });
  $(":header").html(function() {
      var header = $(this).html();
      if(header == "") {
        alert("Missing heading text");
      }
  });

   $( "li", document.body ).each(function() {
     var parentTag = $( this ).parent().get( 0 ).tagName;
     if(parentTag == "UL", parentTag == "OL") {
       alert("okay");
     } else {
       alert("List is not contained within <ul> or <ol> parent element.")
     }
   });

   $( "input", document.body ).each(function() {
     var siblingTag = $( this ).siblings().get( 0 ).tagName;
     // alert(siblingTag);
     if(siblingTag == "LABEL") {
       alert("okay");
     } else {
       alert("Form is missing a label")
     }
   });
});
