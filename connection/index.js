let socketio = require("socket.io");
const { verifySocketToken, socketUtility } = require("../security");

function connection(server) {
	let io = socketio(server, {
		cors: {
			origin: "*",
		},
	});

	io.sockets.on("connection", async (socket) => {
		console.log("connect", socket.id);
		await verifySocketToken(socket, socketUtility);
	});
	return io;
}

module.exports = connection;
