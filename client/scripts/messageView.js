//reformating messages into a suitable format for the entire chatbox
//goes into messagesView.js

var MessageView = {
  render: _.template(
    '<div class="chat">' +
      '<div class="username"><%= userName %></div>' +
      '<div><%= text %></div>' +
    '</div>'
  )
};