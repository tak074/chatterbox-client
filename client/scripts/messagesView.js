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
    //console.log(Parse.readAll(function() { console.log('readAll:'); }));
  },

  render: function(message) {
    //render entire chatbox through underscore method
    return messageView.render(message);
  }

};
