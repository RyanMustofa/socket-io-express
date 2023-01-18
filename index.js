let { server, app } = require("./server");
const cors = require("cors");
const bodyParser = require("body-parser");

let io = require("./connection")(server);
app.io = io;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", require("./router"));

server.listen(1000, () => {
	console.log("Listening port 1000");
});
