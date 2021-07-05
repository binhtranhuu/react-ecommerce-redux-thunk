import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost/amazona_one",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
  ACCESSS_KEY_ID: process.env.ACCESSS_KEY_ID || "accessKeyId",
  SECRET_ACCESSS_KEY: process.env.SECRET_ACCESSS_KEY || "secretAccessKey",
};
