let subscriptions = Object.create(null);

function subscribe(evt, func) {
  if(typeof func !== 'function') {
    throw "Subscribers must be functions"
  }
  const oldSubscriptions = subscriptions[evt] || [];
  oldSubscriptions.push(func);
  subscriptions[evt] = oldSubscriptions;
}

function publish(evt) {
  let args = Array.prototype.slice.call(arguments, 1);
  const subFunctions = subscriptions[evt] || [];
  for(let i = 0; i < subFunctions.length; i++) {
    subFunctions[i].apply(null, args)
  }
}

function unsubscribe(evt, func) {
  const oldSubscriptions = subscriptions[evt] || [];
  const newSubscriptions = oldSubscriptions.filter((item) => item !== func);
  subscriptions[evt] = newSubscriptions;
}

function cancel(evt) {
  delete subscriptions[evt];
}

export {subscribe, publish, unsubscribe, cancel}
