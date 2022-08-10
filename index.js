const AnyProxy = require('anyproxy');




const options = {
  port: 8001,
  rule: require('./rule'),
  webInterface: {
    enable: true,
    webPort: 8002
  },
  throttle: 10000,
  forceProxyHttps: true,
  wsIntercept: false, // 不开启websocket代理
  silent: false,
  dangerouslyIgnoreUnauthorized:true
};
const proxyServer = new AnyProxy.ProxyServer(options);

proxyServer.on('ready', () => { 
  
  console.log('ready')
  /* */ });
proxyServer.on('error', (e) => { 
  
  console.log(e)
  /* */ });
proxyServer.start();

//when finished
// proxyServer.close();