import {Client} from 'rpc-websockets';

const socket = new Client('wss://api.hitbtc.com/api/2/ws');

let connectionOpen = false;
let socketCallQueue = [];

socket.on('open', () => {
  connectionOpen = true;

  if (socketCallQueue.length > 0)
    socketCallQueue.forEach(call => {
      call.func(call.cb);
    });
});

function subscribeTicker(cb) {
  if (!connectionOpen) {
    socketCallQueue.push({func: subscribeTicker, cb: cb});
    return;
  }

  socket.call('subscribeTicker', {
    symbol: 'ETHBTC'
  });

  socket.on('ticker', data => cb(null, data));
}

function unsubscribeTicker() {
  if (!connectionOpen) {
    socketCallQueue.push(unsubscribeTicker);
    return;
  }

  socket.call('unsubscribeTicker', {
    symbol: 'ETHBTC'
  });

  socket.off('ticker');
}

function getSymbols(cb) {
  if (!connectionOpen) {
    socketCallQueue.push({func: getSymbols, cb: cb});
    return;
  }

  socket.call('getSymbols').then(cb);
}

function getCurrencies(cb) {
  if (!connectionOpen) {
    socketCallQueue.push({func: getCurrencies, cb: cb});
    return;
  }

  socket.call('getCurrencies').then(cb);
}

export {subscribeTicker, unsubscribeTicker, getSymbols, getCurrencies};
