import express from 'express';
import bodyParser from 'body-parser';
import calculatorRouter from './routers/calculator';

const app = express();
const PORT = 3010;

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("PUBLIC API");
  next();
});

app.use('/calculator', calculatorRouter);

app.listen(PORT);

console.log(`Server listen on port: ${PORT}`)