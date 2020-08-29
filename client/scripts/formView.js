//submit button

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //can invoke through pressing enter(?)
    let userName = App.username;
    let text = $('#message').val();
    let roomName = 'lobby'; //comeback to change this

    let message = new Message(userName, text, roomName);

    const successCB = () => {
      console.log('created');
    };
    const errorCB = () => {
      console.log('not created');
    };
    Parse.create(message, successCB, errorCB);

    // Stop the browser from submitting the form
    event.preventDefault();
    // submit the message.
    //initiate conten of messages -> messageView -> messagesView.

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
//check script tag. url
};

// constructor() {
//   this.$form = $('form');
//   this.$submit = $('.submit');

//   this.$submit.on('click', (event) => {
//     this.handleSubmit(event);
//   });
// }

// initialize() {
//   FormView.$form.on('submit', FormView.handleSubmit);
// }

// handleSubmit(event) {
//   //can invoke through pressing enter(?)
//   let userName = window.location.search.slice(10);
//   let text = $('#message').val();
//   let roomName = 'lobby'; //comeback to change this

//   let message = new Message(userName, text, roomName);

//   const successCB = () => {
//     console.log('created');
//   };
//   const errorCB = () => {
//     console.log('not created');
//   };
//   Parse.create(message, successCB, errorCB);

//   // Stop the browser from submitting the form
//   event.preventDefault();
//   // submit the message.
//   //initiate conten of messages -> messageView -> messagesView.

//   console.log('click!');
// }