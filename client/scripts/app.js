class App {

  constructor() {

    this.$spinner = $('.spinner img');

    this.username = 'anonymous';
  }

  initialize() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  }

  fetch (callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data); //display it in the chatbox

      callback();
    });
  }

  startSpinner() {
    App.$spinner.show();
    FormView.setStatus(true);
  }

  stopSpinner() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
}
