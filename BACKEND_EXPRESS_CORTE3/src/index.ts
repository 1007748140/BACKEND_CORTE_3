import express, { Request, Response } from 'express';

const app = express();      // Crea una instancia de la aplicación Express
const port = 3000;          // Define el puerto

// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'
app.get('/:number', (req: Request, res: Response) => {
    console.log(req, 'request');
    if (req.query) {
        const name = req.query ? req.query.name : null;
        res.send(`¡Hola, ${name}!`);
    } else {
        res.send('¡Hola, usuario!');
    }
});
app.get('/hello', (_req: Request, res: Response) => {
    res.json(
        {
         saludo:'hola',
         nombre: 'Yadir'
        });
  });
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});