import dotenv from "dotenv";
dotenv.config();
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  socketTimeoutMS: 30000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false,
};

const url = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT&authSource=${DB_NAME}`;

const config = {
  mongoUrl: url,
  mongoOptions: options,
};

export default config;
