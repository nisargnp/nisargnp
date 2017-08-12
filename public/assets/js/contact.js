$(function() {
  
  // contact form animations
  $('#contactButton').click(function() {
    $('#contactFormContainer').fadeToggle();
  });

  // submit form
  $('#contactForm').submit(function(e){

    e.preventDefault();

    var data = {
      name: $("#contactFormName").val(),
      email: $("#contactFormEmail").val(),
      subject: $("#contactFormSubject").val(),
      comment: $("#contactFormComment").val()
    };

    $('#contactFormContainer').fadeToggle();
    $("#contactFormName").val('');
    $("#contactFormEmail").val('');
    $("#contactFormSubject").val('');
    $("#contactFormComment").val('');

    $.ajax({
      url:'/contact',
      type:'post',
      data: data,
      success: function() {
        $.notify("Thanks! I'll get back to you ASAP.", "success");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        $.notify("Something went wrong. Please email me instead.");
      }
    });

  });
  
  $(document).mouseup(function (e) {
    var container = $("#contactFormContainer");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});