import express, {Request , Response} from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import reportRoutes from './routes/reportRoutes'
import shiftRoutes from './routes/shiftRoutes'
import timesheetRoutes from './routes/timesheetRoutes';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())



app.use('/auth', authRoutes);
app.use('/shift', shiftRoutes);
app.use('/timesheet', timesheetRoutes);
app.use('/report', reportRoutes);

app.listen(port, ()=> {
    console.log(` Server is running on PORT - ${port} `);
})
