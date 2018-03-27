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


    $("img").attr("alt", function() {
        var alter = $(this).attr("alt");
        var tally = 0;

        for (i = 0; i < alternativeList.length; i++ ) {
            if (alternativeList[i] === alter){

            tally = tally + 1;
              // alert(tally);
                if (tally >= 2) {
                  alert("Image has alternative text duplicate");
                  break
                }
          } else {
            // alert(alternativeList);
          }
        }
      });
      });



      $("*").attr("id", function() {
        var id = $(this).attr("id");
        var idList = [];

        //This function retrieves all the id's
          $("*").each(function(){
            var id = $(this).attr("id");
            idList.push(id);
            // alert(idList);
        });

        //This function removes the empty id's
      var  idList2 = $.grep(idList,function(n){
           return n == 0 || n
         });
         // alert(idList);

         //This checks to see if there are duplicate id's
            var tally = 0;
            if (id !== undefined){
              for (i = 0; i < idList2.length; i++) {
                  if (idList2[i] === id){
                  tally = tally + 1;
                  alert(tally);
                      if (tally >= 2) {
                        alert("There are duplicate id's.");
                        break
                      }
                } else {
                  alert(idList2);
                }
              }
            }

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
