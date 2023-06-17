import express from 'express';

// dotenv security
import dotenv from 'dotenv';
dotenv.config();

// import importants
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'
import { corsOptions } from './config/corsOptions.js';

// connect with database
import connectDb from './config/connectdb.js';

// importing routes
import userRouter from './routes/userRoute.js';
import authrouter from './routes/authRoute.js';


const app = express();



// giving all permissions
app.use(express.json())
app.use(bodyParser.json({extended : true}))
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/users" , userRouter);
app.use("/auth" , authrouter);

// data base connection
const DATABASE_URL = process.env.DATABASE_URL
connectDb(DATABASE_URL)
// app.use('/api/user',userRoute)


const port = process.env.PORT

app.get("/" , (req , res) => {
    res.send("Hello this is backend")
})

app.listen(port,()=>{
    console.log(`server listen at http://localhost:${port} `);
})
