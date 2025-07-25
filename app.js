const express =  require( 'express')
const dotenv = require("dotenv");
const cors = require("cors")
const blogRoutes = require('./routes/blogRoutes');
const connectDB = require("./database/database");

const app = express();

app.use(express.json());

const corsOptions ={
    origin: true,
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));


dotenv.config();

//connecting database
connectDB();


const PORT = process.env.PORT;

app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)});

//Routes
app.use('/api/blogs', blogRoutes);
app.get('/test', (req, res) => {
  res.json({ message: "hello" });
});



module.exports = app;

