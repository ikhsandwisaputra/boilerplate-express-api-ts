import express from 'express';
import cors from 'cors';
import routes from './routes/router'
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// example routes
app.use('/users', routes);
app.listen(port, () => {
    console.log("server berjalan di server : " + port);
})