const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const art = new User('Art');
const max = new User('Max');
const nina = new User('Nina');

const chatroom = new Chatroom();

chatroom.register(art);
chatroom.register(max);
chatroom.register(nina);

art.send('Hello Max', max);
nina.send('Hello Art, you are the best dev ever!', art);
max.send('Hello Everyone!');