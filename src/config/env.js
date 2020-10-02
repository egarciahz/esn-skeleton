import dotenv from "dotenv";
import parseVard from "dotenv-parse-variables";

let environment = dotenv.config();
if (environment.error) throw environment.error;

const env =  parseVard(environment.parsed);
env.ENVIRONMENT = process.env.NODE_ENV;
global.ENV = env;
Object.freeze(global.ENV);

export default env;
