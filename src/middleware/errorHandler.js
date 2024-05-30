// src/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack)
    }  