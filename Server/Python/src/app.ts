import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import analizadorRoutes from './routes/analizar.routes'

//Inializations
const app = express();

//Settings
app.set('port',process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.get('/',(req,res) =>{
    res.send(`The api is at http://localhost:${app.get('port')}`);
});


app.use(analizadorRoutes);

export default app;