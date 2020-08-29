//entire chat.
//collection of messageView.
//new sign in from the user. load up reset
//reload all the previous chats


// add it into id=chatBox
var MessagesView = {

  initialize: function() {
    //remove
    $( '#chats' ).html('');
    // recall all the previous messages and place them back in
    // var successCB = function() { console.log(prevChat); };
    // var failCB = function() { console.log('error'); };
    // var prevChat = Parse.readAll(successCB, failCB);
    // $( '#chats' ).append(prevChat);

  },


  render: function(data) {
    //render entire chatbox through underscore method
    for (let i = 0; i < data.length; i++) {
      let tempMessageObject = {
        username: xssKiller.escape(data[i].username),
        text: xssKiller.escape(data[i].text),
        roomname: xssKiller.escape(data[i].roomname)
      };
      console.log(tempMessageObject);
      newMessage = MessageView.render(tempMessageObject);
      $('#chats').append(newMessage);
    }
    return messageView.render(data);
  }

};
