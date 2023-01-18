const model = require("../models");

async function verifySocketToken(socket, callback) {
	let token = socket?.request?.headers?.bearertoken;
	if (token) {
		let data = JSON.parse(token);
		await callback(socket);
	} else {
		console.error("token invalid");
	}
}

async function socketUtility(socket) {
	socket.on("subscribe", async (filter) => {
		let serialize = JSON.stringify(filter);
		socket.join(serialize);
		socket.emit(
			"response",
			JSON.stringify({
				status: "subscribed",
				id: socket.id,
			})
		);
		let socketData = await model.socket.findOne({
			where: {
				auth: socket.request.headers.bearertoken,
			},
		});
		if (socketData) {
			await model.socket.update(
				{
					_id: socket.id,
				},
				{
					where: {
						id: socketData.id,
					},
				}
			);
		} else {
			await model.socket.create({
				_id: socket.id,
				auth: socket.request.headers.bearertoken,
			});
		}
	});
}

module.exports = {
	verifySocketToken,
	socketUtility,
};
