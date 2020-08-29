//submit button

class FormView {

  constructor() {
    $form: $('form');
  }

  initialize() {
    FormView.$form.on('submit', FormView.handleSubmit);
  }

  handleSubmit(event) {
    //can invoke through pressing enter(?)
    $('.submit').on('click', (event) => {
      var userName = window.location.search.slice(10);
      var text = $('#message').val();
      var roomName = 'lobby'; //comeback to change this


    });

    // Stop the browser from submitting the form
    event.preventDefault();
    // submit the message.
    //initiate conten of messages -> messageView -> messagesView.

    console.log('click!');
  }

  setStatus(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
//check script tag. url
}