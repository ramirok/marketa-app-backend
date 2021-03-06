// ENVIRONMENT VARIABLES

require("dotenv").config();

const PORT = process.env.PORT;

const MONGODB_URL =
  process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URL_TEST
    : process.env.MONGODB_URL;

const SECRET = process.env.SECRET;

const RESET_PASS_SECRET = process.env.RESET_PASS_SECRET;

const VERIFY_ACC_SECRET = process.env.VERIFY_ACC_SECRET;

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const GOOGLE_SECRET = process.env.GOOGLE_SECRET;

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

module.exports = {
  PORT,
  MONGODB_URL,
  SECRET,
  RESET_PASS_SECRET,
  SENDGRID_API_KEY,
  VERIFY_ACC_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  PAYPAL_CLIENT_ID,
  PAYPAL_SECRET,
};
