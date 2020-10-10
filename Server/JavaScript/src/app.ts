import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import analizadorRoutes from './routes/analizador.routes'

// Inializatios 
const app = express();

//Setitings 
app.set('port',process.env.PORT || 4000);

//Middelewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas

app.get('/',(req,res )=>{
    res.send(`The api is at http://localhost:${app.get('port')}`);
})

app.use(analizadorRoutes);

export default app;