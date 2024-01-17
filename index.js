import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import add from './Routes/add.js';
import edit from './Routes/edit.js';
import del from './Routes/delete.js';
import fetch from './Routes/fetch.js';
import login from './Routes/login.js';
import auth from './Routes/auth.js';

const app = express();
dotenv.config();

// Middleware

app.use(express.json()); // Body parser when sent as json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', add);
app.use('/', edit);
app.use('/', del);
app.use('/', fetch);
app.use('/', login);
app.use('/', auth);

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log('Database is connected successfully');
		const PORT = process.env.PORT;
		app.listen(PORT, () => {
			console.log(`Server is listening on PORT: ${PORT}`);
		});
	} catch (error) {
		console.error(error);
	}
};

connectDB();

app.get('/', (request, res) => {
	res.send('WORKING FINE');
});
