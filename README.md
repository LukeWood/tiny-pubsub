# vanilla-pubsub
Vanilla-pubsub is a __super__ simple event management package written in javascript with no dependencies.

It is written in ES module syntax.

# Usage
The api only has threww functions.  `publish`, `subscribe`, and `unsubscribe`.

```javascript
let logJoin = (name) => console.log(`${name} has joined the room!`);
subscribe("chatroom-join", (name) =>)
publish("chatroom-join", "Luke")
// > Luke has joined the room!
unsubscribe(logJoin)
publish("chatroom-join", "Luke")
// nothing will print
```

# Contributing
Send pull requests.

# Testing
npm install --dev
npm run test

# License
MIT License.
