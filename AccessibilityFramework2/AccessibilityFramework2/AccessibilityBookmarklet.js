$(document).ready(function() {



  $("img").attr("alt", function() {
      var alt = $(this).attr("alt");
      if(alt == "") {
	      // alert("Image missing alternative text");
        $("<div>Image missing alternative text.</div>").insertAfter(this).addClass("error");
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

        // alert(alternativeList.length);

        for (i = 0; i < alternativeList.length; i++) {
            if (alternativeList[i] === alter){
              // alert(alternativeList[i]);
              tally = tally + 1;
              // alert(tally);
                if (tally >= 2) {
                  // alert("Image has alternative text duplicate");
                  $("<div>Image has alternative text duplicate.</div>").insertAfter("img").addClass("error");
                  break;
                }
              }
           else {
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
                  // alert(tally);
                      if (tally >= 2) {
                        // alert("There are duplicate id's.");
                        $("<div>There are duplicate id's.</div>").insertAfter(this).addClass("error");

                        break
                      }
                } else {
                  // alert(idList2);
                }
              }
            }

      });




    $("a").attr("href", function() {
        var link = $(this).attr("href");
        if(link == "") {
          // alert("Link is empty.");
          $("<div>Link is empty.</div>").insertAfter(this).addClass("error");
        }
    });


  $("html").attr("lang", function() {
      var lang = $(this).attr("lang");
      if(lang == "") {
        // alert("Missing language");
        $("<div>Missing document language.</div>").appendTo("body").addClass("error");
      }
  });


  $("button").html(function() {
      var button_text = $(this).html();
      if(button_text == "") {
        // alert("Missing button text");
        $("<div>Missing button text.</div>").insertAfter(this).addClass("error");
      }
  });


  $(":header").html(function() {
      var header = $(this).html();
      if(header == "") {
        // alert("Missing heading text");
        $("<div>Missing heading text.</div>").insertAfter(this).addClass("error");
      }
  });


   $( "li", document.body ).each(function() {
     var parentTag = $( this ).parent().get( 0 ).tagName;
     if(parentTag !== "UL", parentTag !== "OL") {
       // alert("List is not contained within <ul> or <ol> parent element.")
       $("<div>List is not contained within ul or ol parent elements.</div>").insertAfter(this).addClass("error");
    }
   });


   $( "input", document.body ).each(function() {
     var siblingTag = $( this ).siblings().get( 0 ).tagName;
     // alert(siblingTag);
     if(siblingTag !== "LABEL") {
       // alert("Form is missing a label")
       $("<div>Form is missing a label.</div>").insertAfter(this).addClass("error");
     }

   });

   $("form", document.body).each(function() {
     var input = $(this).children("input");
     var labels = $(this).children("label");

     if(labels.length > input.length) {
       $("<div>Multiple form labels.</div>").insertAfter(this).addClass("error");
     }

   });


   $("html, body, p, h1, h2, h3, h4, h5, h6, a").each( function() {
     var size = $(this).css('font-size')
     var remove = size.replace(/px/gi, "");

     if(remove < 10) {
       $("<div>Text too small.</div>").insertAfter(this).addClass("error");
     } 

     // alert(fontSizes);
   });






});
