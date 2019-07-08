const assert = require('assert');
const {subscribe, publish, unsubscribe, cancel} = require('../pubsub')

let valueSet = false;
function setTrue() {
  valueSet = true;
}
function setFalse() {
  valueSet = false;
}

describe('pubsub', () => {
  describe('subscribe', () => {
    it('should call subscribed functions', () => {
      setFalse();
      subscribe('should-set', setTrue)
      publish('should-set')
      assert.equal(valueSet, true)
    })

    it('should call subscribed functions with arguments', () => {
      setFalse();
      subscribe('should-set', (arg) => {
        if(arg == 1){
          setTrue();
        }
      })
      publish('should-set', 1)
      assert.equal(valueSet, true)

      setFalse();
      publish('should-set', 2)
      assert.equal(valueSet, false)
    })

    it('should unsusbscribe functions', () => {
      setFalse();
      subscribe('should-set', setTrue)
      publish('should-set')
      assert.equal(valueSet, true)

      setFalse();
      unsubscribe('should-set', setTrue)
      publish('should-set')
      assert.equal(valueSet, false)
    })

    afterEach(() => {
      cancel('should-set');
    })
  })
})
