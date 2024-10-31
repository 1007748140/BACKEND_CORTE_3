"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('¡Ups! Algo salio mal');
};
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map