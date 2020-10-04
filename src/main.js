import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { json as parseJson } from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import env from "./config/env";
import db from "./db/models";

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types';

const port = parseInt(env.PORT || 3000);
const host = env.HOST || `http://localhost`;
const isProdMode = process.env.NODE_ENV === 'production';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

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

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: !isProdMode,
    context: request => ({
        request,
        env,
        db
    })
}));

app.listen(port, () => {
    console.info(`Server listen on ${host}:${port}`);
});
