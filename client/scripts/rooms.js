//sub-class of the chatRoom

var Rooms = {
  //roomName

  addRoom: function(event) {
    $('#addRoom').on('click', function() {
      console.log('hola');
    });
    console.log('onion');

  }
};

//Add Room should add new room option to the <select id = roomList></select>
//check script tag, url.
// Ensure returned Content-Type header is application/json and not text/html. This shall instruct the browser not misunderstand the context and execute injected script