import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connect from './config/dbConnect.js';
import todoRoutes from './routes/todo.route.js';

dotenv.config();

const app = express();
connect();

app.use(bodyParser.json());

app.use(todoRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
