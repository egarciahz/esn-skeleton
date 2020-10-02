import filterex from '../lib/filterex';
import mapKeys from '../lib/mapKeys';
import env from "./env";

const curEnv = process.env.NODE_ENV || 'development';

const make = function () {
    let config = mapKeys(filterex(env, /^DB_/), (n) => n.replace(/^DB_/, '').toLowerCase());
    config.database = curEnv==='production'?  config.database : `${config?.database}_${curEnv}`;

    return config;
};

module.exports = make();
