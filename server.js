const http = require("http");
const express = require("express");
const connection = require("./connection");
const app = express();
const server = http.createServer(app);

module.exports = {
	server,
	app,
};
