const httpServer = require("http").createServer();
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => { 
    
    socket.on('message',(msg)=>{
        io.sockets.emit('message', msg);
    });
});

httpServer.listen(3000);