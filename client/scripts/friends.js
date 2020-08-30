//username. onClick ( add 'username' ) into Friends.
var Friends = {
  // create friends List through Set
  _data: new Set,

  //when clicking the div with class = friend
  //toggle that friend in/out of friends list.

  toggleFriend: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }

};