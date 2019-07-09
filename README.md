# tiny-pubsub
tiny-pubsub is a __super__ simple event management package written in javascript with __no dependencies__.

### You don't need a framework

Right now tiny-pubsub is __854 bytes__.

It handles most of the UI interactions for my game [bulletz.io](https://bulletz.io).

I wholeheartedly believe my game is more performant and simple due to the lack of framework.

# Installation
```bash
npm install --save tiny-pubsub
```

# Usage
The api only has three functions.  `publish`, `subscribe`, and `unsubscribe`.

```javascript
const {subscribe, publish, unsubscribe} = require('tiny-pubsub')

let logJoin = (name) => console.log(`${name} has joined the room!`);
subscribe("chatroom-join", logJoin)
publish("chatroom-join", "Luke")
// > Luke has joined the room!
unsubscribe(logJoin)
publish("chatroom-join", "Luke")
// nothing will print
```

# Contributing
Send pull requests.

# Testing
```bash
npm install --dev
npm run test
```

# License
MIT License.
