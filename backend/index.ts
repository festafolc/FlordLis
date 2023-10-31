import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './src/routes/auth';
import customerRouter from './src/routes/customer';
import categoryRouter from './src/routes/categories';
import productRouter from './src/routes/products';

dotenv.config({path: '.env'});

const app = express();

app.use(express.static('public'));

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/flordlis/', authRouter);
app.use('/flordlis/customer', customerRouter);
app.use('/flordlis/shop/categories', categoryRouter);
app.use('/flordlis/shop', productRouter);


// Listen
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});