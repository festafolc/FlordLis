import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './src/routes/auth';

dotenv.config({path: '.env'});

const app = express();

app.use(express.static('public'));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/flordlis/auth', authRouter);


// Listen
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});