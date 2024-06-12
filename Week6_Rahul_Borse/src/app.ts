import express, {Request , Response} from 'express';
import cors from 'cors';
import bookRoutes from './routes/booksRoutes';
import authorRoutes from './routes/authorsRoutes'
import usersRoutes from './routes/usersRoutes';
import reviewsRoutes from './routes/reviewsRoutes';
import ratingsRoutes from './routes/ratingsRoutes';
import ordersRoutes from './routes/ordersRoutes';
import paymentsRoutes from './routes/paymentsRoutes';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())



app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/users', usersRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/ratings', ratingsRoutes);
app.use('/orders', ordersRoutes);
app.use('/payments', paymentsRoutes);

app.listen(port, ()=> {
    console.log(` Server is running on PORT - ${port} `);
})
