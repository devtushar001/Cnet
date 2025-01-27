import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import userRouter from './Router/userRouter.js';
import connectDB from './Config/connectDB.js';
import crudRouter from './Router/crudRouter.js';
import razorPayRouter from './Router/razorPayRouter.js';

dotenv.config();

// Validate environment variables
const port = process.env.PORT;
const mongo_url = process.env.MONGODB_URL;
if (!port || !mongo_url) {
  throw new Error("Missing required environment variables: PORT or MONGODB_URL");
}

const app = express();

// Middleware
app.use(helmet()); // Secure HTTP headers
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-production-domain.com'],
  credentials: true, // Allow cookies
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
}));
app.use(express.json());
app.use(cookieParser());

// Database connection
connectDB(mongo_url);

// Routes
app.use('/api/user', userRouter);
app.use('/api/crud', crudRouter);
app.use('/api/razorpay', razorPayRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: `Server running on port ${port}`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
