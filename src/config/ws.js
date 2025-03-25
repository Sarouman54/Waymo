const {io} = require('socket.io-client');

const connectWS = () => {

    const socketOptions = {
        extraHeaders: {
            'app-id': process.env.API_KEY || ''
        },
        reconnection: true,
        reconnectionDelay: 1000,
        timeout: 10000,
    };

    const socket = io(process.env.CAR_URL_WS, socketOptions);

    socket.on("connect", () => {
        console.log("Socket connect ?", socket.connected);
    });

    socket.on("disconnect", () => {
        console.log("Socket connect ?", socket.connected);
    });

    socket.on("carPosition", (data) => {
        console.log(data);
    });

}

module.exports = connectWS;