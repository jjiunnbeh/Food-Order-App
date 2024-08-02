import express from "express";

const app = express();

const portNumber = 3000;
app.listen(portNumber, ()=>
{
    console.log(`Server is listening at port ${portNumber}`);
    console.log();
});

