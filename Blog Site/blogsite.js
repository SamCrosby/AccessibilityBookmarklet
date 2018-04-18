$(document).ready(function(){
    // alert('Document ready');
    $('form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var name = form.find('input[name=name]');
        var comment = form.find('textarea');
         $("dl").append('<dt>' + name.val() + '</dt>');
         $("dl").append('<dd>' + comment.val() + '</dd>');
         name.val('');
         comment.val('');
    });
   //  $('a.reply').on('click', function(event) {
   //     event.preventDefault();
   //     $("#form").show();
   //     $("#form").on('submit', function(event) {
   //       $("#form").hide() && $('a.reply').show();
   //     });
   //     $(this).hide();
   // });
});
