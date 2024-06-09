import express, {Request , Response} from 'express';
import allRoutes from './routes/allRoutes';
import './postgresDB/associations'
const app = express();
const port = 8000;

app.use(express.json());



app.use('/api', allRoutes);

app.listen(port, ()=> {
    console.log(` Server is running on PORT - ${port} `);
})
