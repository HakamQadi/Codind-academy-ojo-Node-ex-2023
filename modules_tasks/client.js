const net = require('net');
const client = net.createConnection({ host: 'localhost', port: 3000 }, () => {
    console.log('******** Connected to server ********');
    client.write("Hello, I'm Hakam!");
});
