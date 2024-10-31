"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/:number', (req, res) => {
    console.log(req, 'request');
    if (req.query) {
        const name = req.query ? req.query.name : null;
        res.send(`¡Hola, ${name}!`);
    }
    else {
        res.send('¡Hola, usuario!');
    }
});
app.get('/hello', (_req, res) => {
    res.json({
        saludo: 'hola',
        nombre: 'Yadir'
    });
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map