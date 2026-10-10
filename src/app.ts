import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { dbConnection } from './config/db';
import taskRoute from './routes/task.route';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// DB
dbConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/tasks', taskRoute);

// Public
const publicPath = path.join(process.cwd(), 'src', 'public');

app.use(express.static(publicPath));

// Frontend fallback
app.get('/', (_req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
