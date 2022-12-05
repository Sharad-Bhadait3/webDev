import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 3000;

const DB = 'mongodb+srv://loginpageuser:bhadait@cluster0.uzoreln.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => {
    console.log(`no connection`);
  });


const middleware = (req, res, next) => {
    console.log('this is middleware');
    next();
}

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", middleware, (req, res) => {
    res.send('this is middleware with about');
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})