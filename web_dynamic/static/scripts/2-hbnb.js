dy(function () {
  $('input[type=checkbox]').click(function () {
    const myListName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(function () {
      myListName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });

  // Make an API request using $.ajax
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    dataType: 'json',
    success: function (json) {
      if (json.status === 'OK') {
        // If the status is "OK," add the class "available" to the div#api_status
        $('#api_status').addClass('available');
      } else {
        // Otherwise, remove the class "available" from the div#api_status
        $('#api_status').removeClass('available');
      }
    },
    error: function (xhr, status) {
      console.log('error ' + status);
    }
  });
});
