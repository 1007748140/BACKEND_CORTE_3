import dotenv from 'dotenv';
import app from './app';
import sequelize from './config/database';

dotenv.config();

const PORT = process.env.PORT || 3000;

// conectamosn a la base de datos
sequelize.authenticate()
.then(() => {
    console.log('Conectado a la base de datos');
    // sincronizamos los modelos
    sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((err: Error) => {
        console.error('Error al sincronizar los modelos:', err);
    });
})
.catch((err: Error) => {
    console.error('Error al conectar a la base de datos:', err);
});
