const express = require("express");
const router = express.Router();
const model = require("../models");

router.post("/login", async (req, res) => {
	let {
		body: { email, password, auth },
		app,
	} = req;
	let _socket = await model.socket.findOne({
		where: {
			auth,
		},
	});
	console.log(_socket._id);
	app.io.sockets.sockets.get(_socket._id).emit("response", "login = " + auth);

	return res.send({
		_socket,
		email,
		password,
		auth,
	});
});

module.exports = router;
