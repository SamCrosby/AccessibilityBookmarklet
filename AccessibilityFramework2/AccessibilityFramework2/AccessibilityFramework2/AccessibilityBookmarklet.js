$(document).ready(function() {


//This is the function
  $("img").attr("alt", function() {
      var alt = $(this).attr("alt");

      //This is the if statement that checks if the alt tags are empty. If they are,
      //then an error box appears with the message "Image missing alternative text."
      if(alt == "") {
	      // alert("Image missing alternative text");
        $("<div>Image missing alternative text.</div>").insertAfter(this).addClass("error");
        $(".error").css({
          'background-color': 'red',
          'color': 'white',
          'width': '100px',
          'padding': '5px',
          'border': 'none',
          'margin': '0',
          'font-family':'sans-serif',
        });

      }
      });

      $("img").attr("alt", function() {
        var alter = $(this).attr("alt");
        //This is the array that contains the list of all the alternative text.
        var alternativeList = [];

      //This function goes through each image, retrieves the alternative Text
      // and then pushes it to the alternativeList array.
      $("img").each(function(){
        var alts = $(this).attr("alt");
        alternativeList.push(alts);
        // alert(alternativeList);
    });

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
                    $(".error").css({
                      'background-color': 'red',
                      'color': 'white',
                      'width': '100px',
                      'padding': '5px',
                      'border': 'none',
                      'margin': '0',
                      'font-family':'sans-serif',
                    });
                     break
                }

              }
          //  else {
          //    // alert(alternativeList);
          // }
        }
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
                        $(".error").css({
                          'background-color': 'red',
                          'color': 'white',
                          'width': '100px',
                          'padding': '5px',
                          'border': 'none',
                          'margin': '0',
                          'font-family':'sans-serif',
                        });
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
          $("<div>Link is empty.</div>").prependTo(this).addClass("error");
          $(".error").css({
            'background-color': 'red',
            'color': 'white',
            'width': '100px',
            'padding': '5px',
            'border': 'none',
            'margin': '0',
            'font-family':'sans-serif',
          });
        }
    });


  $("html").attr("lang", function() {
      var lang = $(this).attr("lang");
      if(lang == "") {
        // alert("Missing language");
        $("<div>Missing document language.</div>").appendTo("body").addClass("error");
        $(".error").css({
          'background-color': 'red',
          'color': 'white',
          'width': '100px',
          'padding': '5px',
          'border': 'none',
          'margin': '0',
          'font-family':'sans-serif',
        });
      }
  });


  $("button").html(function() {
      var button_text = $(this).html();
      if(button_text == "") {
        // alert("Missing button text");
        $("<div>Missing button text.</div>").insertAfter(this).addClass("error");
        $(".error").css({
          'background-color': 'red',
          'color': 'white',
          'width': '100px',
          'padding': '5px',
          'border': 'none',
          'margin': '0',
          'font-family':'sans-serif',
        });
      }
  });

  //This function retrieves all the text from the headers.
  //If the header text is empty, an error box appears after the headers
  //with the message "Missing heading text.".
  $(":header").html(function() {
      var header = $(this).html();
      if(header == "") {
        // alert("Missing heading text");
        $("<div>Missing heading text.</div>").insertAfter(this).addClass("error");
        $(".error").css({
          'background-color': 'red',
          'color': 'white',
          'width': '100px',
          'padding': '5px',
          'border': 'none',
          'margin': '0',
          'font-family':'sans-serif',
        });
      }
  });


   $( "li", document.body ).each(function() {
     var parentTag = $( this ).parent().get( 0 ).tagName;
     if(parentTag !== "UL", parentTag !== "OL") {
       // alert("List is not contained within <ul> or <ol> parent element.")
       $("<div>List is not contained within ul or ol parent elements.</div>").prependTo(this).addClass("error");
       $(".error").css({
         'background-color': 'red',
         'color': 'white',
         'width': '100px',
         'padding': '5px',
         'border': 'none',
         'margin': '0',
         'font-family':'sans-serif',
       });
    }
   });


   $( "input", document.body ).each(function() {
     var siblingTag = $( this ).siblings().get( 0 ).tagName;
     // alert(siblingTag);
     if(siblingTag !== "LABEL") {
       // alert("Form is missing a label")
       $("<div>Form is missing a label.</div>").insertAfter(this).addClass("error");
       $(".error").css({
         'background-color': 'red',
         'color': 'white',
         'width': '100px',
         'padding': '5px',
         'border': 'none',
         'margin': '0',
         'font-family':'sans-serif',
       });
   }

   });

   $("form", document.body).each(function() {
     var input = $(this).children("input");
     var labels = $(this).children("label");

     if(labels.length > input.length) {
       $("<div>Multiple form labels.</div>").insertAfter(this).addClass("error");
       $(".error").css({
         'background-color': 'red',
         'color': 'white',
         'width': '100px',
         'padding': '5px',
         'border': 'none',
         'margin': '0',
         'font-family':'sans-serif',
       });
     }

   });


   $("html, body, p, h1, h2, h3, h4, h5, h6, a").each( function() {
     var size = $(this).css('font-size')
     var remove = size.replace(/px/gi, "");

     if(remove < 10) {
       $("<div>Text too small.</div>").insertAfter(this).addClass("error");
       $(".error").css({
         'background-color': 'red',
         'color': 'white',
         'width': '100px',
         'padding': '5px',
         'border': 'none',
         'margin': '0',
         'font-family':'sans-serif',
       });
     }
     // alert(fontSizes);
   });


});
