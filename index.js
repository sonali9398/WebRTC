const app = require("express")();
const server = require("http").createServer(app);
import cors from "cors";

const io = require("socket.io")(server, {
    cors:{
        origin:"*",
        methods:["GET", "POST"]
    }
});
app.use(cors());

const PORT = precess.env.PORT || 5000;

app.get("/", (req, res) =>{
    res.send("server is running");
});

io.on('connection',(socket) =>{
    socket.emit('me', socket.id);

    socket.on('disconnect', () =>{
        socket.broadcast.emit('call ended');
    });

    socket.on("calluser", ({userToCall, signalData, from, name}) =>{
        io.to(userToCall).emit("calluser", {signal:signalData, from, name})
    });

    socket.on("answercall", (data) =>{
        io.to(data.to).emit("callaccepted", data.signal);
    })
})

server.listen(PORT, () =>console.log(`server is listening on port: ${PORT}`));