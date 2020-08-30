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
  renderMessage: function(message) {
    var xssKiller = {
      escape: function (str) {
        if (typeof str !== 'string') {
          return JSON.stringify(str);
        }
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (char === '&') {
            newStr += '&amp;';
          } else if (char === '<') {
            newStr += '&lt;';
          } else if (char === '>') {
            newStr += '&gt;';
          } else if (char === '"') {
            newStr += '&quot;';
          } else if (char === '\'') {
            newStr += '&apos;';
          } else {
            newStr += char;
          }
        }
        return newStr;
      }

    };

    // var xssKiller = new xssKiller;

    let tempMessageObject = {
      username: xssKiller.escape(message.username),
      text: xssKiller.escape(message.text),
      roomname: xssKiller.escape(message.roomname)
    };
    let newMessage = MessageView.render(tempMessageObject);
    $('#chats').append(newMessage);
  },

  render: function(data) {
    //render entire chatbox through underscore method
    for (let i = 0; i < data.length; i++) {
      let tempMessageObject = {
        username: xssKiller.escape(data[i].username),
        text: xssKiller.escape(data[i].text),
        roomname: xssKiller.escape(data[i].roomname)
      };
      newMessage = MessageView.render(tempMessageObject);
      $('#chats').append(newMessage);
    }
    // return messageView.render(data);
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    console.log('hio');
    Friends.toggleFriend(username, MessagesView.render);
  }
};
