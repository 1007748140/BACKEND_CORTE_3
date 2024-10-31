"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
database_1.default.authenticate()
    .then(() => {
    console.log('Conectado a la base de datos');
    database_1.default.sync()
        .then(() => {
        console.log('Modelos sincronizados');
        app_1.default.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
        .catch((err) => {
        console.error('Error al sincronizar los modelos:', err);
    });
})
    .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
});
//# sourceMappingURL=index.js.map