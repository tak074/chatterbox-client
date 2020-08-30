//components inside the input box
//this will go through messageView.js
var Message = function(userName, text, roomName) {
  this.username = xssKiller.escape(userName);
  this.text = xssKiller.escape(text);
  this.roomname = xssKiller.escape(roomName);
};