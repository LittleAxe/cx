var nextSlot = 1,
   slots = [],
   subscriptions = {};

function getSlot() {
   if (slots.length)
      return slots.pop();

   var slot = String(nextSlot++);
   return slot;
}

function recycle(slot) {
   slots.push(slot);
   delete subscriptions[slot];
}

window.addEventListener('resize', () => ResizeManager.notify());

export class ResizeManager {
   static subscribe(callback) {
      var slot = getSlot();
      subscriptions[slot] = callback;
      return function () {
         recycle(slot);
      }
   }

   static notify() {
      Object.keys(subscriptions).forEach(key=> {
         var cb = subscriptions[key];
         if (cb)
            cb();
      });
   }
}
