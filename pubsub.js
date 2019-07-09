var subscriptions = {};

function subscribe(evt, func) {
  if(typeof func !== 'function') {
    throw "Subscribers must be functions"
  }
  var oldSubscriptions = subscriptions[evt] || [];
  oldSubscriptions.push(func);
  subscriptions[evt] = oldSubscriptions;
}

function publish(evt) {
  var args = Array.prototype.slice.call(arguments, 1);
  var subFunctions = subscriptions[evt] || [];
  for(var i = 0; i < subFunctions.length; i++) {
    subFunctions[i].apply(null, args)
  }
}

function unsubscribe(evt, func) {
  var oldSubscriptions = subscriptions[evt] || [];
  var newSubscriptions = [];
  for(let i = 0; i < oldSubscriptions.length; i++) {
    if (oldSubscriptions[i] != func) {
      newSubscriptions.push(oldSubscriptions[i]);
    }
  }
  subscriptions[evt] = newSubscriptions;
}

function cancel(evt) {
  delete subscriptions[evt];
}

module.exports ={subscribe, publish, unsubscribe, cancel}
