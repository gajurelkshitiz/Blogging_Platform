import express, {Request, Response} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());





app.get('/test', (req: Request, res: Response) => {
  res.send('Hello test route.');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
