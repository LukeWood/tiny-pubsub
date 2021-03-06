# tiny-pubsub
tiny-pubsub is a __super__ simple event management package written in javascript with __no dependencies__.

Right now tiny-pubsub is __827 bytes__.

This is in no way mean't to replace rxjs.
This is a small, synchronously operating, feature-light event driven programming library.
RxJs is a full featured event driven programming library.

# Installation
```bash
npm install --save tiny-pubsub
```

# Usage
The api only has three functions.  `publish`, `subscribe`, and `unsubscribe`.

__event_definitions.js__
```javascript
// Using object singletons is a good way to register events.
const CHATROOM_JOIN = {};
export {CHATROOM_JOIN}
```
__app.js__
```javascript
import {subscribe, publish, unsubscribe} from 'tiny-pubsub'
import {CHATROOM_JOIN} from './event_definitions'
let logJoin = (name) => console.log(`${name} has joined the room!`);
subscribe(CHATROOM_JOIN, logJoin)
publish(CHATROOM_JOIN, "Luke")
// > Luke has joined the room!
unsubscribe(CHATROOM_JOIN, logJoin)
publish(CHATROOM_JOIN, "Luke")
// nothing will print

// alternatively you can use strings as event identifiers
subscribe("chatroom-join", logJoin)
publish("chatroom-join", "Luke")
// > Luke has joined the room!
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
