const express = require('express');
const winston = require('winston');

const app = express();
const PORT = 8080;

// Winston Logger Configuration
const logger = winston.createLogger({
  level: 'info', // Set default logging level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Logs to console
    new winston.transports.File({ filename: 'logs/combined.log' }) // Logs to file
  ]
});

// Middleware for Logging Requests
app.use((req, res, next) => {
  logger.info({ message: `${req.method}`, timestamp: new Date().toISOString() });
  next();
});

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello ji, kaise ho');
});

// Express Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error({ message: err.message, stack: err.stack });
  res.status(500).send('Something went wrong!');
});

// Start Server
app.listen(PORT, () => {
  logger.info(`Express server running on port ${PORT}`);
});
