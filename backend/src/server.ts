import bodyParser = require("body-parser");
import * as apiController from "./controllers/api";
import express from 'express';
import helmet from "helmet";
// import http from "http";
const app = express();
// const server = http.Server(app);
const server = require('http').Server(app);
const port = 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

//pre-flight requests
app.options("*", function(req, res) {
	res.send(200);
});

server.listen(port, (err: any) => {
	if (err) {
		throw err;
	}
	/* eslint-disable no-console */
	console.log("Node Endpoints working :)");
});

app.get('/', (req, res) => res.send("HAUM Sweet OHM"));

/**
 * API examples routes.
 * 
 * Déclarer ici les urls à attaquer
 */
app.get("/api/service1", apiController.service1);
app.get("/api/service2", apiController.service2);

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
