import express, { Application } from 'express';
import cor from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler';
// import userRoutes from './routes/userRoutes';

// Inicializaciones
const app: Application = express();

// Middlewares globales
app.use(cor());
app.options('*', cor());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Rutas
// app.use(userRoutes);

// middleware para manejar errores
app.use(errorHandler);
app.get('/', (_req, res) => {
    res.send('Mi API');
});
export default app;
