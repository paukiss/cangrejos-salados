const express = require('express');
const config = require('./config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

app.listen(config.port, () => logger.info(`Servidor en puerto ${config.port}`));
