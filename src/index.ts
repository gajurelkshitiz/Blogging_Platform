import express, {Request, Response} from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


app.get('/test', (req: Request, res: Response) => {
  res.send('Hello test route.');
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
