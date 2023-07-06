const fs = require('fs')
const path = require('path')
const url = require('url');
const os = require('os')
const crypto = require('crypto');
const querystring = require('querystring');
const childProccess = require('child_process')
const cluster = require('cluster');
const dns = require('dns');
const net = require('net');




async function main() {
  try {

    // console.log('*********EX.1**********')


    // const data = await fs.promises.readFile('example.txt')
    // console.log(data.toString())



    // console.log('*********EX.2**********')



    // const content = "Hello worled"
    // console.log("writing...")
    // await fs.promises.writeFile('example.txt', content);
    // console.log("writing to example.txt is done")


    // console.log('*********EX.5**********')


    // const path1 = 'myPath1/file1'
    // const path2 = 'myPath2/file2'
    // const botPaths = path.join(path1, path2)
    // console.log(botPaths)


    // console.log('*********EX.6**********')


    // const parseUrl = url.parse('http://www.example.com:8080/path?query=value#fragment')
    // console.log(`protocol = ${parseUrl.protocol} /// host = ${parseUrl.host} /// pathname = ${parseUrl.pathname} /// search = ${parseUrl.search} // hash = ${parseUrl.hash}`)


    // console.log('*********EX.7**********')



    // const myOs = os.totalmem()
    // console.log(myOs)


    // console.log('*********EX.8**********')


    // const rand = crypto.randomInt(1, 10);
    // console.log(rand)


    // console.log('*********EX.9**********')


    // const hashMe = crypto.createHash('sha256');
    // console.log(hashMe.digest('Hello worled'))


    // console.log('*********EX.10**********')



    // const query = querystring.parse('name=value&key=value2')
    // console.log(query)


    // console.log('*********EX.11**********')


    // childProccess.exec('dir', (error, stdout) => {
    //   if (error) {
    //     console.error(`exec error: ${error}`);
    //     return;
    //   }
    //   console.log(`stdout: ${stdout}`);
    // });


    // console.log('*********EX.13**********')

    // // cpus().length returns the number of cores in the laptop, iterate and create worker processes based on the number of the cores
    // const count = os.cpus().length - 1;
    // if (cluster.isMaster) {
    //   console.log('I am a master');
    //   for (let i = 0; i < count; i++) {
    //     cluster.fork();
    //   }
    //   cluster.on('online', (worker) => {
    //     console.log(`Worker ${worker.id} is online`);

    //     if (worker.id === 7) {
    //       process.exit();
    //     }
    //   });

    // }


    // console.log('*********EX.14**********')


    // dns.resolve('www.google.com', (err, addresse, family) => {
    //   console.log(addresse[0]);
    // });


    // console.log('*********EX.15**********')

    // const server = net.createServer((socket) => {
    //   console.log('******** Connected to server ********');

    //   socket.on('data', (data) => {
    //     console.log(`Received data from client: ${data}`);
    //   });
    // });

    // server.listen(3000, () => {
    //   console.log(`TCP server is listening on port 3000`);
    // });


    // **************** Ex.16 is on client.js file **************** //


  }
  catch (err) {
    console.log(err)
  }

}

main()




//// Ex.3
// const http = require('http')
// const hostName = '127.0.0.1';
// const port = 8080;
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end('Hello World')
// })
// server.listen(port, hostName, () => {
//   console.log(`server running at http://${hostName}:${port}`)
// })

// // Ex.12
// console.log(`Pinging...`);
// try {
//   const command = 'ping';
//   const args = ['www.google.com'];
//   const childProcess = childProccess.spawn(command, args);
//   childProcess.stdout;
//   console.log(`Ping response`);
// } catch (error) {
//   console.error(error)
// }
