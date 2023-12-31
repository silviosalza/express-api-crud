const express = require("express");
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');
const postRouter = require("./routers/postRouter")
const app = express();


app.use(express.json());

app.use("/posts", postRouter)

app.use(routeNotFoundMiddleware)
app.listen(process.env.PORT || 3000 , () =>{
    console.log(`http://localhost:${process.env.PORT}`)
});
