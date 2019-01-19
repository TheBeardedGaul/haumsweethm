// Controllers (route handlers)
import * as apiController from "./controllers/api";

import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('HAUM Sweet OHM'));

/**
 * API examples routes.
 * 
 * Déclarer ici les urls à attaquer
 */
app.get("/api/service1", apiController.service1);
app.get("/api/service2", apiController.service2)

app.listen(3000, () => console.log('Example app listening on port 3000!'));
