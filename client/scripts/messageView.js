//reformating messages into a suitable format for the entire chatbox
//goes into messagesView.js

class MessageView {

  constructor() {
    this.render = _.template(`
    <!--
    <div class="chat">
      <div class="username"></div>
      <div></div>
    -->
  `);
  }

}