import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json as parseJson } from 'body-parser';
import env from "./config/env";

const port = parseInt(env.PORT || 3000);
const host = env.HOST || `http://localhost`;
const isProdMode = process.env.NODE_ENV === 'production';
const app = express();

app.use(cors({
    origin: [host]
}));

app.use(helmet({
    contentSecurityPolicy: false,
    hidePoweredBy: isProdMode,
    hsts: isProdMode,
}));

app.use(parseJson());

app.use(morgan('tiny'));
app.use(parseJson());

app.listen(port, () => {
    console.info(`Server listen on ${host}:${port}`);
});
