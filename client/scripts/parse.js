class Parse {

  constructor() {
    this.server = `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`;
  }

  create (message, successCB, errorCB = null) {
    // todo: save a message to the server
    //// 'POST'
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }
  //retrieves messages from the server

  readAll (successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

}

/*
  const ajax = (obj) => {
    getDataFrom(obj.url);
    getDataInOrder(obj.data.order);
    if success {
      obj.success();
    } else {
      obj.error();
    }
  }
*/

/*
  const success = () => {
    console.log('SUCCESS!');
  }

  const error = () => {
    console.log('ERROR.');
  }

  Parse.readAll(success, error);
  Parse.readAll.success()


/*

DATABASE:

{
  username: 'Mel Brooks',
  text: 'It\'s good to be the king',
  roomname: 'lobby'
},
{
  username: '2000 Year Old Man',
  text: 'Let em all go to heck execept Cave 76',
  roomname: 'lobby'
},
{
  username: 'My Dude',
  text: 'YOOOOOOOOO',
  roomname: 'lobby'
},
{
  username: 'Panda',
  text: 'hey guys this is my first post',
  roomname: 'lobby'
}




*/