const subscriptions = Object.create(null);

function subscribe(evt, func) {
  if(typeof func !== 'function') {
    throw "Subscribers must be functions"
  }
  const oldSubscriptions = Object.getOwnProperty.call(subscriptions, evt) || [];
  oldSubscriptions.push(func);
  subscriptions[evt] = oldSubscriptions;
}

function publish(evt, ...args) {
  const subFunctions = Object.getOwnProperty.call(subscriptions, evt) || [];
  for(let i = 0; i < subFunctions.length; i++) {
    subFunctions[i].apply(args)
  }
}

function unsubscribe(evt, func) {
  const oldSubscriptions = Object.getOwnProperty.call(subscriptions, evt) || [];
  const newSubscriptions = oldSubscriptions.filter((item) => item !== func);
  subscriptions[evt] = newSubscriptions;
}

export {subscribe, publish, unsubscribe}
