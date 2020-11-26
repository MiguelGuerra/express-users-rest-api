const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//routes
const usersRoutes = require('./Routes/api/users');
const departmentsRoutes = require('./Routes/api/departments');
const dashboardRoutes = require('./Routes/api/dashboard');

const app = express();

//cors policy
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//body parser middleware
app.use(express.json());

//connect to mongodb
mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => {
        console.log(err)
    })

//use routes
//users database
app.use('/api/users', usersRoutes);

//departments database
app.use('/api/departments', departmentsRoutes);

//dashboard database
app.use('/api/dashboard', dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));